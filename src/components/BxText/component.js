module.exports = {
  name: '文本',
  name_en: 'BxText',
  version: '0.0.1',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/6e6f39a530be46f797368522c370b6ab.png',
  description: '文本',
  props: {
    type: 'object',
    properties: {
      html: {
        title: '文本',
        type: 'string',
        category: '基础属性',
        default: '<p>这是一段文本</p>',
        'ui:widget': 'Editor' // 自定义Widget
      }
    }
  },
  slots: [],
  owner: 'huanghua',
  framework: 'vue'
}
