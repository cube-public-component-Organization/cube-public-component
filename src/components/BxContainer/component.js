module.exports = {
  name: '容器',
  name_en: 'BxContainer',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/1b7069d9c3b34e6885922482c72f2dd1.png',
  props: {
    type: 'object',
    properties: {
      layoutDirection: {
        title: '布局方向',
        type: 'string',
        'ui:widget': 'SelectWidget',
        enum: [
          'row',
          'column'
        ],
        enumNames: [
          '横向布局',
          '纵向布局'
        ],
        default: 'row'
      },
      rowControl: {
        title: '水平控制',
        type: 'string',
        'ui:widget': 'SelectWidget',
        enum: [
          'flex-start',
          'flex-end',
          'space-around',
          'space-between',
          'center'
        ],
        enumNames: [
          'flex-start',
          'flex-end',
          'space-around',
          'space-between',
          'center'
        ],
        default: 'flex-start'
      },
      columnControl: {
        title: '垂直控制',
        type: 'string',
        'ui:widget': 'SelectWidget',
        enum: [
          'flex-start',
          'flex-end',
          'center'
        ],
        enumNames: [
          'flex-start',
          'flex-end',
          'center'
        ]
      },
      layoutWrap: {
        title: '溢出换行',
        type: 'boolean',
        default: false
      },
      containerBgImg: {
        title: '容器背景图',
        type: 'string'
      },
      containerBgColor: {
        title: '容器背景色',
        type: 'string',
        format: 'color',
        default: 'transparent'
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
      description: '容器插槽',
      params: []
    }
  ]
}
