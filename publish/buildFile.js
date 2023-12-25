// 上传cdn
const { exec, env } = require('shelljs')
const chalk = require('chalk')
const cubeConf = require('../cube.config')

env.PATH += `:${__dirname}/../node_modules/.bin`

module.exports = (options) => {
  const { componentName, version, componentSourcePath } = options
  console.log(chalk.green(`第③步：开始构建${componentName}组件的${version}版本`))
  return new Promise((resolve) => {
    const { libraryUuid } = cubeConf

    console.log('versionversionversion', version)

    exec(`vue-cli-service build --target lib --formats umd --name ${libraryUuid}__${componentName}__${version} ${componentSourcePath}`, (code, stdout, stderr) => {
      console.log(chalk.green('第③步：构建成功'))
      resolve({ code })
    })
  })
}
