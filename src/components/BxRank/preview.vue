<template>
  <div class="preview">
    <Rank />
  </div>
</template>

<script>
import Rank from './index.vue'

export default {
  name: 'BxPreview',
  components: { Rank },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.preview {
  height: 600px;
}
</style>
