const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const FormData = require('form-data')
const apis = require('./apis')
const cubeConf = require('../cube.config')

function getAllFiles (dirPath, files) {
  files = files || []
  const dir = fs.readdirSync(dirPath)
  for (const file of dir) {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      getAllFiles(filePath, files)
    } else {
      files.push(filePath)
    }
  }
  return files
}

module.exports = (options) => {
  const { libraryUuid, loginInfo } = cubeConf
  const { componentName, version, componentConf, env } = options
  console.log(chalk.green(`第④步：开始上传${componentName}组件的${version}版本到cdn`))

  return new Promise(async (resolve) => {
    // FIXME: 一期只关心js和css
    const files = getAllFiles(path.join(process.cwd(), 'dist')).filter((it) => /(\.js|\.css)$/.test(it))
    const formData = new FormData()

    for (let i = 0; i < files.length; i++) {
      const file = fs.createReadStream(files[i])
      formData.append('file', file)
    }

    const postDataJson = {
      libraryUuid,
      componentName,
      version,
      componentConf: JSON.stringify(componentConf),
      env,
      uid: loginInfo.uid
    }

    Object.entries(postDataJson).forEach(([ key, value ]) => {
      formData.append(key, value)
    })

    try {
      const response = await apis.uploadFile(formData)
      console.log(chalk.green(`第④步：${componentName}组件的${version}版本上传完成`))

      resolve(response)
    } catch (error) {
      console.log(chalk.red(error))
    }
  })
}
