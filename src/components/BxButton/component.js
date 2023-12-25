module.exports = {
  name: '按钮',
  name_en: 'BxButton',
  version: '0.0.1',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/7ce6e0ff99b14977b9c1d9f2d9129771.png',
  description: '按钮',
  props: {
    type: 'object',
    properties: {
      backgroundImage: {
        title: '背景图片',
        type: 'string',
        category: '基础属性',
        default: '',
        'ui:widget': 'Upload' // 自定义Widget
      },
      backgroundColor: {
        title: '背景色',
        type: 'string',
        category: '基础属性',
        format: 'color',
        default: '#151ce6'
      },
      btnText: {
        title: '按钮文字',
        type: 'string',
        default: '按钮',
        category: '基础属性'
      },
      btnTextColor: {
        title: '文字颜色',
        type: 'string',
        format: 'color',
        default: '#000000',
        category: '基础属性'
      },
      btnFontSize: {
        title: '文字大小',
        type: 'number',
        default: 14,
        category: '基础属性'
      },
      btnFontWeight: {
        title: '文字字重',
        type: 'number',
        'ui:widget': 'SelectWidget',
        default: 400,
        enum: [
          400, 600, 700
        ],
        enumNames: [
          'light',
          'medium',
          'bold'
        ]
      }
    }
  },
  slots: [],
  owner: 'huanghua',
  framework: 'vue'
}
