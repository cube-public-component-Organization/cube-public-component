<template>
  <div class="bx-base-empty" :style="emptyStyle" @click="onClickEmpty"></div>
</template>

<script>
export default {
  name: 'BxEmpty',

  // __PROPS_START 到 __PROPS_END 之间的属性会自动提取出来显示在文档的最下面
  props: {
    // __PROPS_START
    /**
     * @title 背景透明
     * @type switch
     */
    isTransparent: {
      type: Boolean,
      default: true
    },
    /**
     * @title 高度
     * @type number
     */
    height: {
      type: Number,
      default: 30
    },
    /**
     * @title 宽度
     * @type number
     */
    width: {
      type: Number,
      default: -1
    },
    /**
     * @title 背景色
     * @type color
     */
    backgroundColor: {
      type: String,
      default: '#ffffff'
    },
    /**
     * @title 点击埋点
     * @description 补全埋点名称，点击生成
     */
    __track_0: String
    // __PROPS_END
  },
  computed: {
    emptyStyle () {
      const { isTransparent, width, height, backgroundColor } = this
      const style = {
        width: `${width === -1 ? '100%' : width + 'px'}`,
        height: `${height}px`,
        backgroundColor: isTransparent ? 'transparent' : backgroundColor
      }

      return style
    }
  },
  methods: {
    onClickEmpty () {
      // this.__track_0 && YPP.track(this.__track_0)
    }
  }
}
</script>

<style lang="less" scoped>
  .bx-base-empty {
  width: 100%;
}

</style>
