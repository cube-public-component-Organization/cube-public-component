module.exports = {
  name: '图片',
  name_en: 'BxImage',
  version: '0.0.2',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/ca3549741aed45308246fabe57487b41.png',
  description: '图片',
  props: {
    type: 'object',
    properties: {
      image: {
        title: '图片',
        type: 'string',
        default: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        category: '基础属性',
        'ui:widget': 'Upload' // 自定义Widget
      },
      largeView: {
        title: '查看大图',
        type: 'boolean',
        default: false,
        category: '基础属性'
      }
    }
  },
  slots: [],
  owner: 'wangmin',
  framework: 'vue'
}
