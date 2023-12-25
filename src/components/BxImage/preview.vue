<template>
  <div class="preview">
    <ImageSelf :width="width" :backgroundColor="backgroundColor" :largeView="true" />
  </div>
</template>

<script>
import ImageSelf from './index.vue'

export default {
  name: 'BxPreview',
  components: {
    ImageSelf
  },
  data () {
    return {
      width: 375,
      backgroundColor: 'red'
    }
  }
}
</script>

<style lang="less" scoped>
.preview {
}
</style>
