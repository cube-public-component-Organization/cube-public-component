<template>
  <div class="container">
    <div :style="{ width: `${tabPercent}%`, margin: '0 auto' }">
      <!-- 文字模式 -->
      <TabText
        v-if="isTxtType"
        :list="tabListArray"
        :value="activeTabIndex"
        :lineColor="tabActiveColor"
        :tabDefaultColor="tabDefaultColor"
        :tabActiveColor="tabActiveColor"
        :tabDivideMode="tabDivideMode"
        @IndexChange="IndexChange"
      />
      <!-- 图片切换模式 -->
      <TabImg
        v-else
        :list="tabListArray"
        @IndexChange="IndexChange"
        :value="activeTabIndex"
      />
    </div>
    <div class="tab-slots" ref="tabSlot">
      <TabContainer
        :value="activeTabIndex"
        :containerPL="containerPL"
        :containerPR="containerPR"
        :containerPT="containerPT"
        :containerPB="containerPB"
        @IndexChange="IndexChange"
      >
        <swiper-slide
          v-for="(item, index) in tabListArray"
          :key="index"
         :style="paddingStyle"
        >
          <slot :name="genSlotName(index)"></slot>
        </swiper-slide>
      </TabContainer>
    </div>
  </div>
</template>

<script>
import TabText from './components/TabText.vue'
import TabContainer from './components/TabContainer.vue'
import TabImg from './components/TabImg.vue'
import { swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'BxTab',
  components: {
    TabText,
    TabContainer,
    TabImg,
    swiperSlide
  },
  props: {
    // tab类型
    tabType: {
      type: String,
      default: 'text'
    },
    // list
    tabListArray: {
      type: Array,
      default: () => {
        return [
          {
            tabTitle: '标签一',
            tabImg:
              'https://yppphoto.1-xian.cn/yppphoto/e38265ae929c48528782a8727abce331.png'
          },
          {
            tabTitle: '标签二',
            tabImg:
              'https://yppphoto.1-xian.cn/yppphoto/7edde32a785d440681141407f643d5fa.png'
          }
        ]
      }
    },
    // 默认颜色
    tabDefaultColor: {
      type: String,
      default: '#000000'
    },
    // 激活颜色
    tabActiveColor: {
      type: String,
      default: '#d07979'
    },
    // 百分比
    tabPercent: {
      type: Number,
      default: 100
    },
    // 分隔模式
    tabDivideMode: {
      type: String,
      default: 'average'
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
  },
  data () {
    return {
      activeTabIndex: 0,
      swiping: false
    }
  },
  computed: {
    isTxtType () {
      return this.tabType === 'text'
    },
    paddingStyle () {
      const padding = `${this.transformStyle(
        this.containerPT
      )} ${this.transformStyle(this.containerPR)} ${this.transformStyle(
        this.containerPB
      )} ${this.transformStyle(this.containerPL)}`
      const style = {
        padding
      }
      return style
    }
  },
  watch: {},
  mounted () {
  },
  created () {},
  methods: {
    genSlotName (index) {
      return `slot-${index}`
    },
    IndexChange (i) {
      this.activeTabIndex = i.index
    },
    transformStyle (value) {
      return (value / 375) * 100 + 'vw'
    }
  }
}
</script>

<style lang="less">
.tab-slots {
  margin-top: 5px;
}
.swiper-slide {
  img {
    width: 100%;
  }
   box-sizing: border-box;
}
.swiper-slides{
  width: 100vw;
}
</style>
