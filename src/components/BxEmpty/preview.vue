<template>
  <div class="preview">
    <BxEmpty
      :height="height"
      :backgroundColor="backgroundColor"
      :isTransparent="isTransparent"
    />
  </div>
</template>

<script>
import BxEmpty from './index.vue'

export default {
  name: 'BxPreview',
  components: {
    BxEmpty
  },
  data () {
    return {
      height: 100,
      backgroundColor: 'red',
      isTransparent: false
    }
  }
}
</script>

<style lang="less" scoped>
.preview{

}
</style>
