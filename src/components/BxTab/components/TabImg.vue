<template>
  <div class="tab-img-container">
    <!-- 图片一起加载，防止点击出不来 -->
    <img
      class="tab-active-img"
      width="100%"
      alt=""
      v-for="(item, index) in list"
      :key="index"
      :src="item.tabImg"
      v-show="index === currentValue"
    />
    <ul class="tab-img-hot-area">
      <li
        class="tab-img-hot-item"
        v-for="(item, index) in list"
        :key="index"
        @click="onToggleImg(index)"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TabImg',
  props: {
    /**
     * 标签列表
     * 格式 [{ title: '标签一', img: '' }, { title: '标签一', img: '' }]
     */
    list: {
      type: Array,
      default: () => []
    },
    /**
     * 选中项索引，默认0
     */
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentValue: 0
    }
  },
  computed: {
    activeTabImg () {
      const activeTab = this.list[this.currentValue] || {}
      return activeTab.bgImg
    }
  },
  watch: {
    value (newVal) {
      this.currentValue = newVal
    }
  },
  methods: {
    onToggleImg (index) {
      this.$emit('IndexChange', { index, fromIndex: this.value })
    }
  }
}
</script>

<style lang="less" scoped>
.tab-img-container {
  position: relative;

  .tab-active-img {
    vertical-align: bottom;
  }

  .tab-img-hot-area {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    .tab-img-hot-item {
      flex: 1;
    }
  }
}
</style>
