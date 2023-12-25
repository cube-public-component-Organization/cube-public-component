
const chalk = require('chalk')
const apis = require('./apis')
const cubeConf = require('../cube.config')

module.exports = (options) => {
  const { componentName, env = 1 } = options
  return new Promise(async (resolve, reject) => {
    const { libraryUuid, loginInfo } = cubeConf
    console.log(chalk.green(`第②步：获取${componentName}版本信息`))

    try {
      const currentInfo = await apis.getCurrentInfo({
        name_en: componentName,
        // TODO: 理论上这个也要检测一下
        libraryUuid,
        uid: loginInfo.uid,
        // 1 测试、2 uat、3 prod
        env
      })

      if (!currentInfo) {
        const version = '0.0.0'
        console.log(chalk.green(`${componentName}版本信息: 是一个新增组件，版本号为${version}`))
        resolve({
          version
        })
      } else {
        console.log(chalk.green(`${componentName}版本信息: 最新版本号为${currentInfo.version}`))
        resolve(currentInfo)
      }
    } catch (err) {
      console.log(chalk.red(`第②步：获取${componentName}版本信息失败 - ${err}`))
    }
  })
}

// build()