const busPlugin = {
  install (Vue) {
    const $bus = new Vue()
    const originBusOn = $bus.$on
    const originBusOnce = $bus.$once
    const proxy$onAnd$once = () => {
      const proxyCallback = (originCb) => {
        return function (eventName, cb, vm) {
          try {
            if (vm) {
              const busEvents = vm.__busEvents || {}
              const handleEvtCbs = (evt, cb) => {
                const evtCbs = busEvents[evt] || []

                evtCbs.push(cb)

                return evtCbs
              }

              if (Array.isArray(eventName)) {
                eventName.forEach((name) => {
                  busEvents[name] = handleEvtCbs(name, cb)
                })
              } else {
                busEvents[eventName] = handleEvtCbs(eventName, cb)
              }

              vm.__busEvents = busEvents
            }
          } catch (err) {
            console.log(err, '$bus.$on-----error')
          }

          return originCb.call($bus, eventName, (payload) => {
            const { targetComponents } = payload || {}
            // 处理指定组件执行回调
            if (targetComponents) {
              if (targetComponents.includes(vm && vm.compnentName)) {
                return cb(payload)
              }
            } else {
              return cb(payload)
            }
          })
        }
      }

      $bus.$on = proxyCallback(originBusOn)
      $bus.$once = proxyCallback(originBusOnce)
    }

    const registerBusData = () => {
      Vue.mixin({
        data () {
          return {
            /*eslint-disable */
            __busEvents: {}
          }
        }
      })
    }

    const removeEvent = () => {
      Vue.mixin({
        beforeDestroy() {
          if (this.__busEvents) {
            for (const evt in this.__busEvents) {
              $bus.$off(evt)
            }
            this.__busEvents = {}
          }
        }
      })
    }

    registerBusData()
    removeEvent()

    proxy$onAnd$once()

    Vue.prototype.$bus = $bus
    window.$bus = $bus
  }
}

export { busPlugin }
