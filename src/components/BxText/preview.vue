<template>
  <div class="preview">
    <BxText></BxText>
  </div>
</template>

<script>
import BxText from './index.vue'

export default {
  name: 'BxPreview',
  components: { BxText },
  data () {
    return {}
  }
}
</script>

<style scoped>
.preview {
  /* width: 100px;
  height: 40px; */
  /* border-radius: 28px;
  overflow: hidden; */
}
</style>
