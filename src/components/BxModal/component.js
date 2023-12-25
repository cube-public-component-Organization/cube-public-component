module.exports = {
  name: '弹窗',
  name_en: 'BxModal',
  icon: 'https://p6.1-xian.cn/bx-user/f4102154cabf43d39badd54ee4b0e6e6.png',
  props: {
    type: 'object',
    properties: {
      soonShow: {
        title: '立即展示',
        type: 'boolean',
        category: '基础属性',
        default: false
      },
      editShow: {
        title: '编辑器中展示',
        type: 'boolean',
        category: '基础属性',
        default: false
      },
      modalHeight: {
        title: '组件高度',
        type: 'number',
        category: '基础属性',
        default: 375
      },
      // 背景图
      modalImg: {
        title: '背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/d3d47c9c2eff4dbe8c88b87b21e22460.png'
      },
      // 关闭图片
      modalExitImg: {
        title: '关闭按钮',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/cb91b5e9e35f494393d5decc2866c93f.png'
      },
      // 背景色
      modalColor: {
        type: 'string',
        title: '背景色',
        format: 'color',
        default: '',
        category: '基础属性'
      },
      // 容器背景图
      modalContainerBgImg: {
        title: '容器背景图',
        type: 'string',
        'ui:widget': 'Upload'
      },
      modalContainerColor: {
        title: '容器背景色',
        type: 'string',
        format: 'color',
        default: '',
        category: '基础属性'
      },
      containerPL: {
        title: '容器左内边距',
        type: 'number',
        default: 15,
        category: '基础属性'
      },
      containerPR: {
        title: '容器右内边距',
        type: 'number',
        default: 15,
        category: '基础属性'
      },
      containerPT: {
        title: '容器上内边距',
        type: 'number',
        default: 15,
        category: '基础属性'
      },
      containerPB: {
        title: '容器下内边距',
        type: 'number',
        default: 15,
        category: '基础属性'
      }
    }
  },
  slots: [
    {
      name: 'slot-0',
      description: '容器插槽',
      params: []
    }
  ]
}
