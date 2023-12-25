<template>
  <div class="preview">
    <component v-bind:is="name" :containerHeight="containerHeight"></component>
  </div>
</template>

<script>
import BxInput from './index.vue'
// https://p6.hellobixin.com/bx-user/9a3d8f6a1797483191522dd95783f919.js
export default {
  name: 'BxPreview',
  components: {
    BxInput
  },
  data () {
    return {
      name: 'BxInput',
      containerHeight: 100
    }
  }
}
</script>

<style lang="less" scoped>
.preview{

}
</style>
