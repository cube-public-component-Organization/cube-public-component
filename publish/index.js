
const preCheck = require('./preCheck')
const getVersion = require('./getVersion')
const buildFile = require('./buildFile')
const uploadFile = require('./uploadFile')
const cubeConf = require('../cube.config')
const semver = require('semver')

;(async() => {
  const { componentName, componentConf, componentSourcePath } = await preCheck() || {}
  const env = 1
  const currentInfo = await getVersion({
    componentName,
    env
  })
  // 这里理论上需要新增
  const { version } = currentInfo
  // FIXME: 这里可以做成可选的，小版本升级还是
  const newVersion = semver.inc(version, 'patch')
  const buildRes = await buildFile({
    componentName,
    componentSourcePath,
    version: newVersion,
  })

  const uploadFileRes = await uploadFile({
    componentName,
    componentConf,
    version: newVersion,
    env
  })

  console.log(uploadFileRes)
})()

// build()
