<template>
  <div class="bx-image" @click="openModal">
    <img width="100%" class="image-img" :src="image" alt="图片">
    <div v-if="isModalOpen" @click.stop="closeModal" class="modal-overlay">
      <div class="modal">
        <img :src="imageUrl" alt="大图" @click.stop />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BxImage',
  props: {
    image: {
      type: String,
      default: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    },
    largeView: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isModalOpen: false,
      imageUrl: ''
    }
  },
  methods: {
    openModal () {
      if (!this.largeView) return
      this.imageUrl = this.image
      this.isModalOpen = true
    },
    closeModal () {
      this.imageUrl = ''
      this.isModalOpen = false
    }
  }
}
</script>

<style lang="less" scoped>
.bx-image {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
/* 弹窗蒙层样式 */
.modal-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 蒙层透明度 */
  z-index: 999;
  justify-content: center;
  align-items: center;
  display: flex;
}

/* 弹窗样式 */
.modal {
  background-color: #fff;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  cursor: pointer;
}

.modal img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}
</style>
