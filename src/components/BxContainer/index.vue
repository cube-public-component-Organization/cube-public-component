<template>
  <div :class="baseContainerClasses" :style="containerStyle">
    <!-- SLOT_DESC: 容器插槽 -->
    <slot name="slot-0"></slot>
  </div>
</template>

<script>
// import './base-container.scss'
export default {
  name: 'BxContainer',
  props: {
    // __PROPS_START
    /**
     * @title 布局方向
     * @type select
     * @options [{label:"横向布局",value: 'row'},{label:"纵向布局",value: 'column'}]
     */
    layoutDirection: {
      type: String,
      default: 'column'
    },
    /**
     * @title 水平控制
     * @type select
     * @options [{label:"flex-start",value: 'flex-start'},{label:"flex-end",value: 'flex-end'},{label:"space-around",value: 'space-around'},{label:"space-between",value: 'space-between'},{label:'center',value: 'center'}]
     */
    rowControl: {
      type: String,
      default: 'flex-start'
    },
    /**
     * @title 垂直控制
     * @type select
     * @options [{label:"flex-start",value: 'flex-start'},{label:"flex-end",value: 'flex-end'},{label:"center",value: 'center'}]
     */
    columnControl: {
      type: String,
      default: 'flex-start'
    },
    /**
     * @title 溢出换行
     * @type switch
     */
    layoutWrap: {
      type: Boolean,
      default: false
    },
    /**
     * @title 容器背景图
     * @type img
     */
    containerBgImg: {
      type: String
    },
    /**
     * @title 容器背景色
     * @type color
     */
    containerBgColor: {
      type: String
    },
    /**
     * @title 容器左内边距
     * @type number
     */
    containerPL: {
      type: Number,
      default: 15
    },
    /**
     * @title 容器右内边距
     * @type number
     */
    containerPR: {
      type: Number,
      default: 15
    },
    /**
     * @title 容器上内边距
     * @type number
     */
    containerPT: {
      type: Number,
      default: 15
    },
    /**
     * @title 容器下内边距
     * @type number
     */
    containerPB: {
      type: Number,
      default: 15
    }
    // __PROPS_END
  },
  computed: {
    containerStyle () {
      const padding = `${this.transformStyle(this.containerPT)} ${this.transformStyle(this.containerPR)} ${this.transformStyle(this.containerPB)} ${this.transformStyle(this.containerPL)}`
      const style = {
        padding
      }

      if (this.containerBgColor) {
        style.backgroundColor = this.containerBgColor
      }

      if (this.containerBgImg) {
        style.backgroundImage = `url(${this.containerBgImg})`
        style.backgroundSize = '100% auto'
        style.backgroundPosition = 'top'
        style.backgroundRepeat = 'no-repeat'
      }

      return style
    },
    baseContainerClasses () {
      const isRow = this.layoutDirection === 'row'

      return [
        'bx-base-container',
        isRow ? 'bx-base-container-row' : 'bx-base-container-column',
        this.layoutWrap ? 'bx-base-container-wrap' : 'bx-base-container-nowrap',
        `bx-base-container-row-control-${this.rowControl}`,
        `bx-base-container-column-control-${this.columnControl}`
      ]
    }
  },
  methods: {
    transformStyle (value) {
      return value / 375 * 100 + 'vw'
    }
  }
}
</script>
<style lang="less" scoped>
.bx-base-container {
  // 为可视化专门写的
  > div {
    display: flex;
  }

  &.bx-base-container-row {
    > div {
      flex-direction: row;
    }
  }

  &.bx-base-container-column {
    > div {
      flex-direction: column;
    }
  }

  &.bx-base-container-wrap {
    > div {
      flex-wrap: wrap;
    }
  }

  &.bx-base-container-nowrap {
    > div {
      flex-wrap: nowrap;
    }
  }

  &.bx-base-container-row-control-flex-start {
    > div {
      justify-content: flex-start;
    }
  }

  &.bx-base-container-row-control-flex-end {
    > div {
      justify-content: flex-end;
    }
  }

  &.bx-base-container-row-control-space-around {
    > div {
      justify-content: space-around;
    }
  }

  &.bx-base-container-row-control-space-between {
    > div {
      justify-content: space-between;
    }
  }

  &.bx-base-container-row-control-center {
    > div {
      justify-content: center;
    }
  }

  &.bx-base-container-column-control-flex-start {
    > div {
      align-items: flex-start;
    }
  }

  &.bx-base-container-column-control-flex-start {
    > div {
      align-items: flex-start;
    }
  }

  &.bx-base-container-column-control-flex-end {
    > div {
      align-items: flex-end;
    }
  }

  &.bx-base-container-column-control-center {
    > div {
      align-items: center;
    }
  }
}
</style>
