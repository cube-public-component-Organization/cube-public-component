// 前置检测
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')

module.exports = () => {
  return new Promise((resolve) => {
    console.log(chalk.green('第①步：开始组件前置检查'))
    const rootComponentDir = path.join(process.cwd(), './src/components')
    // 仅支持一个个上传
    const componentName = process.argv.slice(2)[0]
    const componentDir = path.join(rootComponentDir, componentName)

    if (fs.existsSync(componentDir)) {
      const componentConfPath = path.join(componentDir, './component.js')
      const componentSourcePath = path.join(componentDir, './index.vue')
      let componentConf = {}

      if (fs.existsSync(componentConfPath)) {
        componentConf = require(componentConfPath)
      } else {
        console.log(chalk.red(`第①步前置检测失败：请编写${componentName}对应的component.js配置`))
      }

      if (fs.existsSync(componentSourcePath)) {
        console.log(chalk.green('第①步：组件前置检查通过✅'))
        resolve({
          componentName,
          componentSourcePath,
          componentConf
        })
      } else {
        console.log(chalk.red(`第①步前置检测失败：未找到${componentName}对应的index.vue组件`))
      }
    } else {
      console.log(chalk.red(`第①步前置检测失败：未找到${componentName}组件`))
    }
  })
}
