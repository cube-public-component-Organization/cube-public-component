<template>
  <div class="rank">
    <div
      class="rank-border"
      v-if="finalRankList.length"
      :style="borderStyle"
      id="rank-border"
    >
      <div
        class="rank-border-list"
        :style="listStyle(item.rank)"
        v-for="(item, index) in finalRankList.slice(0, rankListLength)"
        :key="index"
        :title="item"
      >
        <div class="rank-border-list-left">
          <div class="rank-border-list-rank">
            <img
              :src="
                item.rank === 1
                  ? top1RankImage
                  : item.rank === 2
                  ? top2RankImage
                  : top3RankImage
              "
              alt=""
              v-if="top3Arr.includes(item.rank)"
            />
            <div v-else :style="rankingStyle">{{ item.rank }}</div>
          </div>
          <div class="rank-border-list-info">
            <!-- 头像 -->
            <div
              class="rank-border-list-info-avatar"
              :style="{
                borderRadius: avatarShowType === 'round' ? '50%' : 'none'
              }"
            ><img :src="item.avatar" alt=""></div>
            <!-- 昵称 -->
            <div class="rank-border-list-info-nickname" :style="nicknameStyle">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="rank-border-list-right" :style="rankInfoStyle">
          <!-- 分值 -->
          {{ item.score }}
        </div>
      </div>
      <!-- </List> -->
    </div>
    <div class="rank-none" v-else>
      <img :src="noneBackgroundImage" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rankList: Array,
    backgroundImage: String,
    topFontColor: String,
    borderBackgroundImage: String,
    rankingColor: String,
    top1BackgroundImage: String,
    top2BackgroundImage: String,
    top3BackgroundImage: String,
    top1RankImage: String,
    top2RankImage: String,
    top3RankImage: String,
    nicknameFontSize: Number,
    nicknameColor: String,
    rankInfoFontSize: Number,
    rankInfoColor: String,
    avatarShowType: String,
    noneBackgroundImage: String,
    rankListLength: Number
  },
  data () {
    return {
      loading: false,
      finished: false,
      top3Arr: [1, 2, 3],
      lodingList: []
    }
  },
  computed: {
    borderStyle () {
      const background = { backgroundImage: `url(${this.backgroundImage})` }
      // 标题和padding 34+10
      // const height = { height: `${this.listHeight - 44}px` }
      return {
        ...background
        // ...height
      }
    },
    rankingStyle () {
      const color = { color: this.rankingColor }
      return {
        ...color
      }
    },
    nicknameStyle () {
      const font = { fontSize: this.nicknameFontSize + 'px' }
      const color = { color: this.nicknameColor }
      return {
        ...font,
        ...color
      }
    },
    rankInfoStyle () {
      const font = { fontSize: this.rankInfoFontSize + 'px' }
      const color = { color: this.rankInfoColor }
      return {
        ...font,
        ...color
      }
    },
    finalRankList () {
      return this.rankList.concat(this.lodingList) || []
    }
  },
  methods: {
    touchMove () {
      const tagClass = document.getElementById('rank-border')
      tagClass.onscroll = async (e) => {
        const x = e.target
        if (x.scrollHeight - x.scrollTop === x.clientHeight) {
          if (this.finalRankList.length >= this.rankListLength) {
            return
          }
          this.lodingList.push(
            {
              executorId: '22', // 用户或聊天室id
              name: '昵称2',
              showNo: '666',
              rank: 2,
              avatar: ''
            },
            {
              executorId: '33', // 用户或聊天室id
              name: '昵称3',
              showNo: '666',
              rank: 3,
              avatar: ''
            }
          )
        }
      }
    },
    listStyle (i) {
      const backgroundType = {
        1: this.top1BackgroundImage,
        2: this.top2BackgroundImage,
        3: this.top3BackgroundImage
      }[i]
      const background = {
        backgroundImage: !this.top3Arr.includes(i)
          ? `url(${this.borderBackgroundImage})`
          : `url(${backgroundType})`
      }
      //   const background = {
      //     backgroundImage: `url(${this.borderBackgroundImage})`
      //   }

      return {
        ...background
      }
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < this.rankListLength; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= this.rankListLength) {
          this.finished = true
        }
      }, 1000)
    }
  },
  mounted () {
    this.touchMove()
  }
}
</script>
<style lang="less" scoped>
@import './RankList.scss';
</style>
