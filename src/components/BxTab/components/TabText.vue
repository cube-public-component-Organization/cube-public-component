<template>
  <div class="text-container">
    <div
      class="tab-scroll-wrapper"
      :class="{
        hideBar: tabDivideMode === 'content',
      }"
      ref="scrollTarget"
    >
      <div
        class="tab-list"
        :class="{
          ['tab-list--content']: tabDivideMode === 'content',
          ['list-d2']: tabDivideMode === 'average' && list && list.length === 2,
          ['list-d3']: tabDivideMode === 'average' && list && list.length === 3,
          ['list-d4']: tabDivideMode === 'average' && list && list.length === 4,
          ['list-d5']: tabDivideMode === 'average' && list && list.length === 5,
        }"
      >
        <div
          class="tab-list-item"
          :style="c === value ? activeStyle : defaultStyle"
          v-for="(i, c) in list"
          :key="c"
          @click="handleItem(c)"
        >
          <div class="tab-text-title">{{ i.tabTitle }}</div>
          <div
            class="tab-list-bottom-line"
            :style="c === value ? activeLineStyle : ''"
            v-if="c === value"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabText',
  props: {
    list: {
      type: Array
    },
    value: {
      type: Number,
      default: 0
    },
    lineColor: {
      type: String
    },
    tabDefaultColor: {
      type: String
    },
    tabActiveColor: {
      type: String
    },
    tabDivideMode: {
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    currentValue () {
      return this.value
    },
    activeStyle () {
      const style = {}
      if (this.tabActiveColor) {
        style.color = this.tabActiveColor
      }
      return style
    },
    defaultStyle () {
      const style = {}
      if (this.tabDefaultColor) {
        style.color = this.tabDefaultColor
      }
      return style
    },
    activeLineStyle () {
      const style = {}
      if (this.tabActiveColor) {
        style.background = this.tabActiveColor
      }
      return style
    }
  },
  watch: {
    // value: {
    //   immediate: true,
    //   handler(v, oldV) {
    //     if (v === undefined || v === null) return;
    //     this.$bus.$emit("IndexChange", { index: v });
    //   },
    // },
  },
  methods: {
    handleItem (i) {
      this.$emit('IndexChange', { index: i, fromIndex: this.value })
      const container = document.querySelector('.tab-scroll-wrapper')
      const listContainer = document.querySelector('.tab-list')
      const item = listContainer.querySelectorAll('.tab-list-item')[i]

      this.$nextTick(() => {
        container.scrollTo({
          left:
            item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2,
          behavior: 'smooth',
          top: 0
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.tab-scroll-wrapper {
  //   height: 100%;

  &.hideBar {
    overflow: auto;
    overflow-y: hidden;
    height: calc(100% + 36px);

    -webkit-overflow-scrolling: touch;
  }
}
.tab-list {
  display: flex;
  height: 100%;
  white-space: nowrap;
  &.tab-list--content {
    height: calc(100% - 36px);

    .tab-list-item {
      padding: 0 16px;
    }
  }

  &.list-d2 {
    box-sizing: border-box;
    padding: 0 96px;

    .tab-list-item {
      width: 50%;

      .tab-text-title {
        max-width: 248px;
        text-align: center;
      }
    }
  }

  &.list-d3 {
    padding: 0 32px;

    .tab-list-item {
      width: 33.3%;

      .tab-text-title {
        max-width: 196px;
        text-align: center;
      }
    }
  }

  &.list-d4 {
    .tab-list-item {
      width: 25%;

      .tab-text-title {
        max-width: 154px;
        text-align: center;
      }
    }
  }

  &.list-d5 {
    .tab-list-item {
      width: 20%;

      .tab-text-title {
        max-width: 118px;
        text-align: center;
      }
    }
  }
}
.tab-list-item {
  position: relative;
}
.tab-list-bottom-line {
  margin: 0 auto;
  width: 25%;
  height: 5px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
}
</style>
