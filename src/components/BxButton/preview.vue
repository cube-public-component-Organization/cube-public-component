<template>
  <div class="preview">
    <Button :backgroundImage="require('../BxContainer/imgs/red.png')" backgroundColor="#24485b" :btnFontSize="22" btnTextColor="#000000"></Button>
  </div>
</template>

<script>
import Button from './index.vue'

export default {
  name: 'BxPreview',
  components: { Button },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.preview {
  /* width: 100px;
  height: 40px; */
  border-radius: 28px;
  overflow: hidden;
}
</style>
