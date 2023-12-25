<template>
  <div class="task" :style="containerStyle">
    <TaskList
      :taskBackgroundImage="taskBackgroundImage"
      :taskTitleColor="taskTitleColor"
      :taskDescColor="taskDescColor"
      :taskPrizeColor="taskPrizeColor"
      :taskBtnImage="taskBtnImage"
      :taskDoneBtnImage="taskDoneBtnImage"
      :taskProgressColor="taskProgressColor"
      :taskList="taskList"
      :configId="configId"
    />
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'
import taskAPis from '../../common/taskAndRank.js'
import { standByList } from './config'
export default {
  name: 'BxTask',
  components: { TaskList },
  props: {
    configId: {
      type: Number
    },
    backgroundImage: {
      type: String,
      default:
        'https://p6.hellobixin.com/bx-user/1dcddd9232cf4ca8b0e04a26a74e79d5.png'
    },
    // 任务条背景图
    taskBackgroundImage: {
      type: String,
      default:
        'https://yppphoto.1-xian.cn/yppphoto/7eca5ab0dfbb47c99822960e984da9f2.png'
    },
    // 任务文字颜色
    taskTitleColor: {
      type: String,
      default: '#cb51b6'
    },
    // 任务描述文字颜色
    taskDescColor: {
      type: String,
      default: '#2c3e50'
    },
    // 奖励文字颜色
    taskPrizeColor: {
      type: String,
      default: '#2c3e50'
    },
    // 按钮图片
    taskBtnImage: {
      type: String,
      default:
        'https://yppphoto.1-xian.cn/yppphoto/2c7089eaa02d4e63863b0925b5d220e5.png'
    },

    // 已完成按钮图片
    taskDoneBtnImage: {
      type: String,
      default:
        'https://yppphoto.1-xian.cn/yppphoto/2c7089eaa02d4e63863b0925b5d220e5.png'
    },
    // 进度文字颜色
    taskProgressColor: {
      type: String,
      default: '#fff'
    }
  },
  data () {
    return {
      taskList: [],
      standByList: standByList
    }
  },
  computed: {
    containerStyle () {
      const background = { backgroundImage: `url(${this.backgroundImage})` }
      return {
        ...background
      }
    }
  },
  methods: {
    async handleInit () {
      if (window.cubeUserInfo) {
        await taskAPis
          .taskQuery({
            taskGroupId: this.configId || 23,
            userId: window.cubeUserInfo.uid
            // userId: '190630994443320042'
          })
          .then((r) => {
            this.taskList = r
          })
      } else {
        await taskAPis
          .taskQuery({
            taskGroupId: 23,
            // userId: window.cubeUserInfo.uid
            userId: '190630994443320042'
          })
          .then((r) => {
            this.taskList = r
          })
        // this.taskList = this.standByList
      }
    }
  },
  mounted () {
    this.handleInit()
  }
}
</script>

<style lang="less" scoped>
.task {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
