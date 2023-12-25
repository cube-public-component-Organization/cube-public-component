<template>
  <div class="task-border">
    <ul>
      <li v-for="(i, c) in taskList" :key="c" :style="tasklistStyle">
        <div class="task-title">
          <div class="task-list-name" :style="nameStyle">{{ i.taskName }}</div>
          <div class="task-list-description" :style="descStyle">
            {{ i.taskTitle }}
          </div>
          <div class="task-list-prize" :style="prizeStyle" v-if="i.awardList">
            奖励：
            <div
              class="task-list-prize-list"
              v-for="(item, index) in i.awardList"
              :key="index"
            >
              <img :src="item.awardIcon" alt="" />
              <div>
                {{ item.awardName }}*{{ item.awardValue }}{{ item.awardUnit }}
              </div>
              <div v-if="index !== i.awardList.length - 1">，</div>
            </div>
          </div>
        </div>
        <div class="task-operate">
          <div
            class="task-operate-btn"
            :style="btnStyle"
            @click="handleTask(i)"
          >
            {{ taskBtnText(i) }}
          </div>
          <div class="task-operate-progress" :style="progressStyle">
            {{ i.completedValue }}/{{ i.taskInfo.taskTargetValue }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import taskApis from '@/common/taskAndRank'
export default {
  props: {
    taskBackgroundImage: String,
    taskTitleColor: String,
    taskDescColor: String,
    taskPrizeColor: String,
    taskBtnImage: String,
    taskDoneBtnImage: String,
    taskProgressColor: String,
    taskList: Array,
    configId: Number
  },
  data () {
    return {}
  },
  computed: {
    tasklistStyle () {
      const background = { backgroundImage: `url(${this.taskBackgroundImage})` }
      return { ...background }
    },
    btnStyle () {
      const background = { backgroundImage: `url(${this.taskBtnImage})` }
      return { ...background }
    },
    nameStyle () {
      const color = { color: this.taskTitleColor }
      return { ...color }
    },
    descStyle () {
      const color = { color: this.taskDescColor }
      return { ...color }
    },
    prizeStyle () {
      const color = { color: this.taskPrizeColor }
      return { ...color }
    },
    progressStyle () {
      const color = { color: this.taskProgressColor }
      return { ...color }
    }
  },
  methods: {
    taskBtnText (i) {
      return i.taskFinishStatus
        ? i.buttonDescription.unClickText
        : i.buttonDescription.clickText
    },
    async handleTask (i) {
      if (i.taskFinishStatus) return
      const { taskInfo } = i
      // 主动
      if (taskInfo.type === 'active') {
        if (taskInfo.content.scene === 'sign') {
          // 签到
          // TODO:调接口
          await taskApis.executeTask({
            data: {},
            taskId: this.configId,
            userId: '',
            scene: 'sign'
          })
        } else {
          // 跳转
          window.location.href = taskInfo.content.ext.activeUrl
          // TODO:调接口
          await taskApis.executeTask({
            data: {},
            taskId: this.configId,
            userId: '',
            scene: 'redirect'
          })
        }
      } else {
        // 被动
        await taskApis.executeTask({
          data: {},
          taskId: '',
          userId: ''
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import './TaskList.scss';
</style>
