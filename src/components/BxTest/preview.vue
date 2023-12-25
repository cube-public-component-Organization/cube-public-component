<template>
  <div class="preview">
    <BxTest></BxTest>
  </div>
</template>

<script>
import BxTest from './index.vue'

export default {
  name: 'BxPreview',
  components: { BxTest },
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
