<template>
  <div class="input" :style="containerStyle">
    <input v-model="inputValue" type="text">
  </div>
</template>

<script>
export default {
  name: 'BxInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    containerHeight: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      index: 0,
      inputValue: ''
    }
  },
  watch: {
    inputValue: {
      handler: function (val) {
        this.$emit('update:value', val)
      }
    }
  },
  computed: {
    containerStyle () {
      return {
        height: `${this.containerHeight}px`
      }
    }
  },
  mounted () {
    this.inputValue = this.value
  },
  methods: {
    onClickInput (index) {
      this.index = index
    }
  }
}
</script>

<style lang="less" scoped>
.input {

}
</style>
