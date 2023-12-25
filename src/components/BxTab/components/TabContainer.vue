<template>
  <div class="container">
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      class="swiper-container"
      @slideChange="handleTransitionEnd"

    >
      <slot ></slot>
    </swiper>
  </div>
</template>

<script>
import { swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'TabContainer',
  components: { swiper },
  props: {
    value: {
      type: Number,
      default: 0
    },
    containerPL: {
      type: Number
    },
    containerPR: {
      type: Number
    },
    containerPT: {
      type: Number
    },
    containerPB: {
      type: Number
    }
  },
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
  },
  watch: {
    value: {
      handler (newVal, old) {
        const swiper = this.$refs.mySwiper.swiper
        swiper.slideTo(newVal, 500)
      }
    }
  },
  methods: {
    handleTransitionEnd (i) {
      const swiper = this.$refs.mySwiper.swiper
      this.$emit('IndexChange', { index: swiper.realIndex, fromIndex: this.value })
    },
    genSlotName (index) {
      return `slot-${index}`
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
.swiper-container {
  //   height: 100vh;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>
