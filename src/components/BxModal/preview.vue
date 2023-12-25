<template>
  <div class="preview">
    <component v-bind:is="name" ></component>
  </div>
</template>

<script>
import BxModal from './index.vue'
export default {
  name: 'BxPreview',
  components: {
    BxModal
  },
  data () {
    return {
      name: 'BxModal'
    }
  }
}
</script>

<style lang="less" scoped>
.preview{

}
</style>
