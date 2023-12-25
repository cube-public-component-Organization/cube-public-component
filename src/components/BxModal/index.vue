<template>
  <div class="modal-container">
    <div v-if="visible" class="modal-mask" @click="onClickMask">
      <div class="modal-bg" :style="modalImgStyle">
        <div class="slot-style" :style="containerStyle">
          <slot name="slot-0">123</slot>
        </div>
        <div
          class="modal-close"
          @click="visible = false"
          :style="modalExitStyle"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BxModal',
  props: {
    soonShow: {
      type: Boolean,
      default: false
    },
    editShow: {
      type: Boolean,
      default: false
    },
    modalHeight: {
      type: Number,
      default: 375
    },
    modalImg: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/d3d47c9c2eff4dbe8c88b87b21e22460.png'
    },
    modalExitImg: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/cb91b5e9e35f494393d5decc2866c93f.png'
    },
    modalColor: {
      type: String,
      default: ''
    },
    modalContainerBgImg: {
      type: String,
      default: ''
    },
    modalContainerColor: {
      type: String,
      default: ''
    },
    /**
     * @title 容器左内边距
     * @type number
     */
    containerPL: {
      type: Number,
      default: 15
    },
    /**
     * @title 容器右内边距
     * @type number
     */
    containerPR: {
      type: Number,
      default: 15
    },
    /**
     * @title 容器上内边距
     * @type number
     */
    containerPT: {
      type: Number,
      default: 15
    },
    /**
     * @title 容器下内边距
     * @type number
     */
    containerPB: {
      type: Number,
      default: 15
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    modalImgStyle () {
      const style = {}
      if (this.modalColor) {
        style.backgroundColor = this.modalColor
      }

      if (this.modalHeight) {
        style.height = this.transformStyle(this.modalHeight)
      }

      if (this.modalImg) {
        style.backgroundImage = `url(${this.modalImg})`
        style.backgroundSize = '100% auto'
        style.backgroundPosition = 'top'
        style.backgroundRepeat = 'no-repeat'
      }

      return style
    },
    modalExitStyle () {
      const style = {}
      if (this.modalExitImg) {
        style.backgroundImage = `url(${this.modalExitImg})`
        style.backgroundSize = '100% auto'
        style.backgroundPosition = 'top'
        style.backgroundRepeat = 'no-repeat'
      }
      return style
    },
    containerStyle () {
      const padding = `${this.transformStyle(
        this.containerPT
      )} ${this.transformStyle(this.containerPR)} ${this.transformStyle(
        this.containerPB
      )} ${this.transformStyle(this.containerPL)}`
      const style = {
        padding
      }
      if (this.modalContainerColor) {
        style.backgroundColor = this.modalContainerColor
      }

      if (this.modalContainerBgImg) {
        style.backgroundImage = `url(${this.modalContainerBgImg})`
        style.backgroundSize = '100% auto'
        style.backgroundPosition = 'top'
        style.backgroundRepeat = 'no-repeat'
      }
      return style
    }
  },
  watch: {
    editShow (newVal) {
      const __cube__ = window.__cube__ || {}
      // 控制编辑器中是否展示
      if (__cube__.inEditor) {
        this.toggleShow(newVal)
      }
    },
    soonShow (newVal) {
      this.toggleShow(newVal)
    },
    visible (newVal) {
      if (newVal) {
        document.getElementById('app').style.overflow = 'hidden'
      } else {
        document.getElementById('app').style.overflow = 'auto'
      }
    }
  },
  mounted () {},
  created () {
    this.initShowModal()
  },
  methods: {
    initShowModal () {
      this.toggleShow(this.soonShow)
    },
    onClickMask () {},
    transformStyle (value) {
      return (value / 375) * 100 + 'vw'
    },
    toggleShow (visible = true) {
      this.visible = visible
    }
  }
}
</script>

<style lang="less" scoped>
@import "./index.scss";
</style>
