<template>
  <div class="text">{{tabDivideMode}}</div>
</template>

<script>
export default {
  name: 'BxTest',
  props: {
    tabDivideMode: {
      type: String,
      default: 'average'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.text {
  width: 100%;
  height: 100%;
}
</style>
