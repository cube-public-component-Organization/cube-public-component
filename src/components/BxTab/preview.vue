<template>
  <div class="preview">
    <component v-bind:is="name" :tabListArray="tabListArray">
      <template v-slot:slot-0>1</template>
      <template v-slot:slot-1>2</template>
      <template v-slot:slot-3>3</template>
    </component>
  </div>
</template>

<script>
import BxTab from './index.vue'
export default {
  name: 'BxPreview',
  components: {
    BxTab
  },
  data () {
    return {
      name: 'BxTab',
      tabListArray: [
        {
          tabTitle: '标签一',
          tabImg: 'https://yppphoto.1-xian.cn/yppphoto/e38265ae929c48528782a8727abce331.png'
        },
        {
          tabTitle: '标签二',
          tabImg: 'https://yppphoto.1-xian.cn/yppphoto/7edde32a785d440681141407f643d5fa.png'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.preview {
}
</style>
