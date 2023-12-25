module.exports = {
  name: 'Tab',
  name_en: 'BxTab',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/87a235227abb4c649ef8ce3af52fe5f5.png',
  props: {
    type: 'object',
    properties: {
      tabType: {
        type: 'string',
        title: '类型',
        enum: ['text', 'img'],
        enumNames: ['文字填充', '图片填充'],
        default: 'text'
      },
      // Tab列表

      tabListArray: {
        type: 'array',
        title: 'Tab列表',
        'ui:options': {
          showIndexNumber: true
        },
        default: [
          {
            tabTitle: '标签一',
            tabImg: 'https://yppphoto.1-xian.cn/yppphoto/e38265ae929c48528782a8727abce331.png'
          },
          {
            tabTitle: '标签二',
            tabImg: 'https://yppphoto.1-xian.cn/yppphoto/7edde32a785d440681141407f643d5fa.png'
          }
        ],
        items: {
          type: 'object',
          properties: {
            tabTitle: {
              type: 'string',
              title: '标题'
            },
            tabImg: {
              type: 'string',
              title: '图片',
              'ui:widget': 'Upload'
            }
          }
        }
      },
      // 默认颜色
      tabDefaultColor: {
        type: 'string',
        title: '默认颜色',
        format: 'color',
        default: '#000000'
      },
      // 激活颜色
      tabActiveColor: {
        type: 'string',
        title: '激活颜色',
        format: 'color',
        default: '#d07979'
      },
      // 百分比
      tabPercent: {
        title: '百分比',
        type: 'integer',
        default: 100,
        minimum: 0,
        maximum: 100,
        'ui:widget': 'el-slider',
        'ui:options': {
          width: '70%'
        }
      },
      // 分隔模式
      tabDivideMode: {
        type: 'string',
        title: '分隔模式',
        default: 'average',
        enum: ['content', 'average'],
        enumNames: ['内容适配', '均分']
      },
      containerPL: {
        title: '容器左内边距',
        type: 'number',
        default: 15
      },
      containerPR: {
        title: '容器右内边距',
        type: 'number',
        default: 15
      },
      containerPT: {
        title: '容器上内边距',
        type: 'number',
        default: 15
      },
      containerPB: {
        title: '容器下内边距',
        type: 'number',
        default: 15
      }
    }
  },
  slots: [
    {
      name: 'slot-0',
      description: '容器插槽0',
      params: []
    },
    {
      name: 'slot-1',
      description: '容器插槽1',
      params: []
    }
  ]
}
