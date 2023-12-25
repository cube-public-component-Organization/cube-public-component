<template>
  <div class="home">
    <ul>
      <li v-for="(route, i) in routes" :key="i" @click="goView(route)">
        组件：{{ route.componentName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BxHome',
  data () {
    return {
      routes: []
    }
  },
  mounted () {
    this.setRoutes()
  },
  methods: {
    setRoutes () {
      this.routes = this.$router.options.routes.filter(
        (it) => it.name !== 'home'
      )
      console.log(this.routes)
    },
    goView (route) {
      const { name } = route
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home li {
  padding-top: 10px;
  cursor: pointer;
}
</style>
