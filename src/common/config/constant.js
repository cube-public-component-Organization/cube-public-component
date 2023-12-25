export const OUT_SIDE_CURRENT_XUA = 'OUT_SIDE_CURRENT_XUA'
export const OUT_SIDE_CURRENT_TOKEN = 'OUT_SIDE_CURRENT_TOKEN'
export const OUT_SIDE_CURRENT_UDID = 'OUT_SIDE_CURRENT_UDID'
export const ENV = (() => {
  const isKelvinHost = /bxcube/.test(location.hostname)
  let env = ''

  if (isKelvinHost) {
    const match = location.hostname.match(/(.*)-web/)
    env = (match && match[1]) || 'prod'
  } else {
    // 本地环境默认dev
    env = 'dev'
  }

  return env
})()
