<template>
  <div class="preview">
    <Container>
      <div slot="slot-0">
        <div>111</div>
        <div>222</div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from './index.vue'

export default {
  name: 'BxPreview',
  components: {
    Container
  },
  data () {
    return {
      width: 100
    }
  }
}
</script>

<style lang="less" scoped>
.preview {
}
</style>
