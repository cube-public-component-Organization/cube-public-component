<template>
  <div class="button" :style="btnStyle">{{ btnText }}</div>
</template>

<script>
export default {
  name: 'BxButton',
  props: {
    backgroundImage: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: '按钮'
    },
    btnTextColor: {
      type: String,
      default: ''
    },
    btnFontSize: {
      type: Number,
      default: 14
    },
    btnFontWeight: {
      type: Number,
      default: 600
    }
  },
  data () {
    return {}
  },
  computed: {
    btnStyle () {
      const background = this.backgroundImage ? { backgroundImage: `url(${this.backgroundImage})` } : { backgroundColor: this.backgroundColor }
      const color = { color: this.btnTextColor }
      const fontSize = { fontSize: `${this.btnFontSize}px` }
      const fontWeight = { fontWeight: this.btnFontWeight }
      return {
        ...background,
        ...color,
        ...fontSize,
        ...fontWeight
      }
    }
  }
}
</script>

<style lang="less" scoped>
.button{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
