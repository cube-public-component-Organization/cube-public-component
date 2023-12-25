module.exports = {
  name: '榜单',
  name_en: 'BxRank',
  icon: 'https://yppphoto.1-xian.cn/yppphoto/73b42da83d244eb6934a2c9f66f5a055.png',
  props: {
    type: 'object',
    required: ['configId'],
    properties: {
      configId: {
        title: '配置ID',
        type: 'number',
        'err:required': '配置ID必填'
      },
      // 背景图
      backgroundImage: {
        title: '背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.hellobixin.com/bx-user/1dcddd9232cf4ca8b0e04a26a74e79d5.png'
      },
      // 标题背景图
      topBackgroundImage: {
        title: '标题背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/3017a2be8ef643fba7c6068056610404.png'
      },
      // 第一名背景图
      top1BackgroundImage: {
        title: '第一名背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/9e342ba02b2349b6af0e2a25a3349c7d.png'
      },
      // 第二名背景图
      top2BackgroundImage: {
        title: '第二名背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/9e342ba02b2349b6af0e2a25a3349c7d.png'
      },
      // 第三名背景图
      top3BackgroundImage: {
        title: '第三名背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/9e342ba02b2349b6af0e2a25a3349c7d.png'
      },
      // 其他背景图
      borderBackgroundImage: {
        title: '其他背景图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/9e342ba02b2349b6af0e2a25a3349c7d.png'
      },
      // 第一名排名图标
      top1RankImage: {
        title: '第一名排名图标',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/46558319be37450596e7766b0cf75551.png'
      },
      // 第二名排名图标
      top2RankImage: {
        title: '第二名排名图标',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/daa42e9a9cff444f80d55c686d3e8b4a.png'
      },
      // 第三名排名图标
      top3RankImage: {
        title: '第三名排名图标',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/32b1a22c14b44217ba50e99f41e5d485.png'
      },
      // 名次颜色
      rankingColor: {
        type: 'string',
        title: '名次颜色',
        format: 'color',
        default: '#d5dce2',
        category: '基础属性'
      },
      // 昵称字号
      nicknameFontSize: {
        title: '昵称字号',
        type: 'number',
        default: 12,
        category: '基础属性'
      },
      // 昵称颜色
      nicknameColor: {
        type: 'string',
        title: '昵称颜色',
        format: 'color',
        default: '#d5dce2',
        category: '基础属性'
      },
      // 活动数值名称
      topRankName: {
        title: '活动数值名称',
        type: 'string',
        default: '榜单分值'
      },
      // 活动数值名称字号
      topRankFontSize: {
        title: '活动数值名称字号',
        type: 'number',
        default: 12,
        category: '基础属性'
      },
      // 活动数值名称颜色
      topRankColor: {
        type: 'string',
        title: '活动数值名称颜色',
        format: 'color',
        default: '#d5dce2',
        category: '基础属性'
      },
      // 活动数值内容字号
      rankInfoFontSize: {
        title: '活动数值内容字号',
        type: 'number',
        default: 12,
        category: '基础属性'
      },
      // 活动数值内容颜色
      rankInfoColor: {
        type: 'string',
        title: '活动数值内容颜色',
        format: 'color',
        default: '#cb51b6',
        category: '基础属性'
      },
      // 头像类型
      avatarShowType: {
        type: 'string',
        title: '头像类型',
        default: 'square',
        enum: ['square', 'round'],
        enumNames: ['方形', '圆形']
      },
      // 空态图
      noneBackgroundImage: {
        title: '空态图',
        type: 'string',
        'ui:widget': 'Upload',
        default:
          'https://p6.1-xian.cn/bx-user/eb5a18a095e34c18ba934724199ce8a2.png'
      },
      // 榜单长度
      rankListLength: {
        title: '榜单长度',
        type: 'number',
        default: 40,
        category: '基础属性'
      }
    }
  }
}
