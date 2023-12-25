module.exports = {
  name: '占位',
  name_en: 'BxEmpty',
  version: '0.0.1',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/7039e1e6c4cf4cf9975ae89904d76e4c.png',
  description: '占位',
  props: {
    type: 'object',
    properties: {
      isTransparent: {
        title: '背景透明',
        type: 'boolean',
        category: '基础属性',
        default: true
      },
      height: {
        title: '高度',
        type: 'number',
        category: '基础属性',
        default: 30
      },
      width: {
        title: '宽度',
        type: 'number',
        category: '基础属性',
        default: -1
      },
      backgroundColor: {
        title: '背景颜色',
        type: 'string',
        format: 'color',
        default: 'transparent',
        category: '基础属性'
      }
    }
  },
  slots: [],
  owner: 'wangmin',
  framework: 'vue'
}
