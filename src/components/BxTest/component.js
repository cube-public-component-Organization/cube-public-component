module.exports = {
  name: '测试组件',
  name_en: 'BxText',
  version: '0.0.1',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/6e6f39a530be46f797368522c370b6ab.png',
  description: '文本',
  props: {
    type: 'object',
    properties: {
      tabDivideMode: {
        type: 'string',
        title: '分隔模式',
        default: 'average',
        enum: ['content', 'average'],
        enumNames: ['内容适配', '均分'],
        category: '基础属性'
      },
      tabList: {
        type: 'array',
        title: 'Tab列表',
        default: [
          {
            title: '标签一',
            img: 'https://yppphoto.1-xian.cn/yppphoto/e38265ae929c48528782a8727abce331.png'
          },
          {
            title: '标签二',
            img: '"https://yppphoto.1-xian.cn/yppphoto/7edde32a785d440681141407f643d5fa.png'
          }
        ],
        category: '别的属性',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              title: '标题'
            },
            img: {
              type: 'string',
              title: '图片'
              // 'ui:widget': 'Upload'
            }
          }
        }
      }
    }
  },
  slots: [],
  owner: 'huanghua',
  framework: 'vue'
}
