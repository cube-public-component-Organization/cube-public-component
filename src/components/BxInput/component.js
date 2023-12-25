module.exports = {
  name: '输入',
  name_en: 'BxInput',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/87a235227abb4c649ef8ce3af52fe5f5.png',
  props: {
    type: 'object',
    properties: {
      containerHeight: {
        title: '容器高度',
        type: 'number',
        category: '测试',
        default: 100
      },
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
      }
    }
  },
  slots: []
}
