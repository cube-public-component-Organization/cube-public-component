<template>
  <div class="container" id="bx-rank-container">
    <RankTop
      :topBackgroundImage="topBackgroundImage"
      :topRankColor="topRankColor"
      :topRankName="topRankName"
      :topRankFontSize="topRankFontSize"
    />
    <RankList
      :rankList="rankList"
      :backgroundImage="backgroundImage"
      :borderBackgroundImage="borderBackgroundImage"
      :rankingColor="rankingColor"
      :top1BackgroundImage="top1BackgroundImage"
      :top2BackgroundImage="top2BackgroundImage"
      :top3BackgroundImage="top3BackgroundImage"
      :top1RankImage="top1RankImage"
      :top2RankImage="top2RankImage"
      :top3RankImage="top3RankImage"
      :nicknameFontSize="nicknameFontSize"
      :nicknameColor="nicknameColor"
      :rankInfoFontSize="rankInfoFontSize"
      :rankInfoColor="rankInfoColor"
      :avatarShowType="avatarShowType"
      :noneBackgroundImage="noneBackgroundImage"
      :rankListLength="rankListLength"
    />
  </div>
</template>

<script>
import RankTop from './components/RankTop.vue'
import RankList from './components/RankList.vue'
// import rankApis from '@/common/taskAndRank'
export default {
  name: 'BxRank',
  components: { RankTop, RankList },
  props: {
    configId: {
      type: Number
    },
    /**
     *  列表配置项
     */
    // 背景切图
    backgroundImage: {
      type: String,
      default:
        'https://p6.hellobixin.com/bx-user/1dcddd9232cf4ca8b0e04a26a74e79d5.png'
    },
    // 标题图
    topBackgroundImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/3017a2be8ef643fba7c6068056610404.png'
    },
    // 第一名背景图
    top1BackgroundImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/9e342ba02b2349b6af0e2a25a3349c7d.png'
    },
    // 第二名背景图
    top2BackgroundImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/9e342ba02b2349b6af0e2a25a3349c7d.png'
    },
    // 第三名背景图
    top3BackgroundImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/9e342ba02b2349b6af0e2a25a3349c7d.png'
    },
    // 其他背景图
    borderBackgroundImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/9e342ba02b2349b6af0e2a25a3349c7d.png'
    },

    // 第一名排名图标
    top1RankImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/46558319be37450596e7766b0cf75551.png'
    },
    // 第二名排名图标
    top2RankImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/daa42e9a9cff444f80d55c686d3e8b4a.png'
    },
    // 第三名排名图标
    top3RankImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/32b1a22c14b44217ba50e99f41e5d485.png'
    },
    // 名次颜色
    rankingColor: {
      type: String,
      default: '#451ce2'
    },
    // 昵称字号
    nicknameFontSize: {
      type: Number,
      default: 18
    },
    // 昵称颜色
    nicknameColor: {
      type: String,
      default: '#d5dce2'
    },
    // 活动数值名称
    topRankName: {
      type: String,
      default: '榜单分值'
    },
    // 活动数值名称字号
    topRankFontSize: {
      type: Number,
      default: 15
    },
    // 活动数值名称颜色
    topRankColor: {
      type: String,
      default: '#d5dce2'
    },
    // 活动数值内容字号
    rankInfoFontSize: {
      type: Number,
      default: 18
    },
    // 活动数值内容颜色
    rankInfoColor: {
      type: String,
      default: '#cb51b6'
    },
    // 头像类型  ---square 方 ---round 圆
    avatarShowType: {
      type: String,
      default: 'square'
    },
    // 空态图
    noneBackgroundImage: {
      type: String,
      default:
        'https://p6.1-xian.cn/bx-user/eb5a18a095e34c18ba934724199ce8a2.png'
    },
    // 榜单长度
    rankListLength: {
      type: Number,
      default: 30
    }
  },
  data () {
    return {
      standByList: [
        {
          executorId: '11', // 用户或聊天室id
          name: '用户昵称1',
          showNo: '666',
          avatar: '',
          rank: 1,
          score: 100
        },
        {
          executorId: '22', // 用户或聊天室id
          name: '用户昵称2',
          showNo: '666',
          rank: 2,
          avatar: '',
          score: 90
        }
      ],
      rankList: []
    }
  },
  computed: {
    contentStyle () {
      const background = { backgroundImage: `url(${this.backgroundImage})` }
      return {
        ...background
      }
    },
    btnStyle () {
      const background = this.backgroundImage
        ? { backgroundImage: `url(${this.backgroundImage})` }
        : { backgroundColor: this.backgroundColor }
      const color = { color: this.btnTextColor }
      const fontSize = { fontSize: `${this.btnFontSize}px` }
      const fontWeight = { fontWeight: this.btnFontWeight }
      return {
        ...background,
        ...color,
        ...fontSize,
        ...fontWeight
      }
    }
  },
  methods: {
    async handleInit () {
      this.rankList = this.standByList
      // if (window.cubeUserInfo) {
      //   await rankApis.taskQuery({
      //     boardId: this.configId || 4,
      //     pageNo: 0,
      //     pageSize: 10,
      //     userId: '190630994443320042'
      //   })
      // } else {
      //   this.rankList = this.standByList
      // }
    }
  },
  mounted () {
    this.handleInit()
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
