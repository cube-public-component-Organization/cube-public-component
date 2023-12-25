import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const registerRoutes = () => {
  const contextInfo = require.context('../components', true, /preview.vue$/)
  console.log(contextInfo.keys())
  const routes = contextInfo.keys().map((filePath) => {
    // debugger
    // filePath 形如 ./Home.vue、./modifiers/capture.vue
    // path我们希望是/home、/modifiers/capture
    // 所以需要把开头的./和.vue都替换为空
    // debugger
    const path = filePath.toLowerCase().replace(/^\.|\.vue/g, '')
    const componentName = filePath.match(/(\w*)/g).filter((name) => name)[0]
    // name的话将/home、/modifiers/capture转成小驼峰即可
    // 把开头的/先替换掉，再把第一个/后的单词变成大写就可以了
    const name = path.replace(/^\//, '').replace(/\/(\w)/, ($0, $1) => $1.toUpperCase())
    // 通过require去读取.vue文件内容
    const component = require(`../components/${filePath.replace(/^\.\//, '')}`).default

    return {
      path,
      name,
      component,
      componentName
    }
  })

  return routes
}

const rRoutes = registerRoutes()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...rRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
