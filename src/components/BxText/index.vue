<template>
  <div class="text" v-html="html"></div>
</template>

<script>
export default {
  name: 'BxText',
  props: {
    html: {
      type: String,
      default: '<p>这是一段文本</p>'
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
