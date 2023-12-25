<template>
  <div class="rank-top" :style="topStyle">
    <span>排名</span>
    <span>用户信息</span>
    <span>{{ topRankName }}</span>
  </div>
</template>
<script>
export default {
  props: {
    topBackgroundImage: {
      type: String
    },
    topRankColor: {
      type: String
    },
    topRankName: {
      type: String
    },
    topRankFontSize: {
      type: Number
    }
  },
  data () {
    return {}
  },
  computed: {
    topStyle () {
      const background = { backgroundImage: `url(${this.topBackgroundImage})` }
      const color = { color: this.topRankColor }
      const fontsize = { fontSize: this.topRankFontSize + 'px' }
      return {
        ...background,
        ...color,
        ...fontsize
      }
    }
  }
}
</script>

<style lang="less" scoped>
.rank-top {
  width: 100vw;
  height: 34px;
  padding: 0px 22px 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-weight: 600;
  top: 0;
  z-index: 5;
  position: relative;
  // margin-bottom: 12px;
  background-size: cover;
  background-repeat: no-repeat;

  span:nth-child(1) {
    // width: 88px;
    padding-right: 62px;
  }
  span:nth-child(2) {
    flex: 1;
    text-align: left;
  }
  span:nth-child(3) {
    width: 130px;
    text-align: right;
  }
}
</style>
