module.exports = {
  name: '任务',
  name_en: 'BxTask',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/d4317dd975744339be5ac877b79fe2f6.png',
  props: {
    type: 'object',
    required: ['configId'],
    properties: {
      configId: {
        title: '配置ID',
        type: 'number'
      },
      // 背景图
      backgroundImage: {
        title: '背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.hellobixin.com/bx-user/1dcddd9232cf4ca8b0e04a26a74e79d5.png'
      },
      // 任务条背景图
      taskBackgroundImage: {
        title: '任务条背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://yppphoto.1-xian.cn/yppphoto/7eca5ab0dfbb47c99822960e984da9f2.png'
      },
      // 任务文字颜色
      taskTitleColor: {
        type: 'string',
        title: '文字颜色',
        format: 'color',
        default: '',
        category: '基础属性'
      },
      // 任务描述文字颜色
      taskDescColor: {
        type: 'string',
        title: '描述文字颜色',
        format: 'color',
        default: '',
        category: '基础属性'
      },
      // 奖励文字颜色
      taskPrizeColor: {
        type: 'string',
        title: '奖励文字颜色',
        format: 'color',
        default: '',
        category: '基础属性'
      },
      // 按钮图片
      taskBtnImage: {
        title: '按钮图片',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://yppphoto.1-xian.cn/yppphoto/2c7089eaa02d4e63863b0925b5d220e5.png'
      },
      // 已完成按钮图片
      taskDoneBtnImage: {
        title: '已完成按钮图片',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://yppphoto.1-xian.cn/yppphoto/2c7089eaa02d4e63863b0925b5d220e5.png'
      },
      // 进度文字颜色
      taskProgressColor: {
        type: 'string',
        title: '进度文字颜色',
        format: 'color',
        default: '',
        category: '基础属性'
      }
    }
  }
}
