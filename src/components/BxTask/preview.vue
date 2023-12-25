<template>
  <div class="preview">
    <Task/>
  </div>
</template>

<script>
import Task from './index.vue'

export default {
  name: 'BxPreview',
  components: { Task },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.preview {
  height: 380px;
}
</style>
