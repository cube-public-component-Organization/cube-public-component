export const standByList = [
  {
    taskId: 1,
    taskFinishStatus: 1, // 1:已完成,0 待完成
    taskName: '领取一个宝箱',
    taskTitle: '领取宝箱的副标题',
    taskInfo: {
      type: 'active', // passive被动
      taskTargetValue: '10',
      content: {
        scene: '1',
        ext: {
          url: ''
        }
      }
    },
    completedValue: 10,
    buttonDescription: {
      unClickText: '未完成',
      clickText: '已完成'
    },
    awardList: [
      {
        awardIcon:
          'https://p6.1-xian.cn/bx-user/46558319be37450596e7766b0cf75551.png',
        awardName: '头像框',
        awardValue: 10,
        awardUnit: '个'
      },
      {
        awardIcon:
          'https://p6.1-xian.cn/bx-user/46558319be37450596e7766b0cf75551.png',
        awardName: '头像框',
        awardValue: 10,
        awardUnit: '个'
      }
    ]
  },
  {
    taskId: 2,
    taskFinishStatus: 0, // 1:已完成,0 待完成
    taskName: '赠送一个能量源',
    taskTitle: '',
    taskInfo: {
      type: 'passive', // passive被动
      taskTargetValue: '10',
      content: {
        scene: '2',
        ext: {
          url: ''
        }
      }
    },
    completedValue: 2,
    buttonDescription: {
      unClickText: '未完成',
      clickText: '已完成'
    },
    awardList: [
      {
        awardIcon: '',
        awardName: '头像框',
        awardValue: 10,
        awardUnit: '个'
      }
    ]
  }
]
