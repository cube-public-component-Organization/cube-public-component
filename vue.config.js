const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
  // publicPath: '//g.yppstatic.com/bx-cube/cube-public-component/tab/0.0.2/',
  // configureWebpack: {
  //   mode: 'production',
  //   target: ['web', 'es5'],
  //   resolve: {
  //     aliasFields: ['browser'],
  //   },
  //   output: {
  //     // path: path.join(outDir, config.output.path),
  //     // publicPath: '//g.yppstatic.com',
  //     // filename: config.output.filename || 'index.min.js',
  //     // library: config.output.library || 'eden',
  //     libraryTarget: 'umd',
  //     globalObject: 'this',
  //     chunkLoadingGlobal: 'xxxxxxxx'
  //   },
  // }
  // css: {
  //   extract: false
  // },
  // chainWebpack: config => {
  //   // 将 CSS 样式文件打包到 JavaScript 文件中
  //   config.module
  //     .rule('css')
  //     .test(/\.css$/)
  //     .use('style-loader')
  //     .loader('style-loader')
  //     .end()
  //     .use('css-loader')
  //     .loader('css-loader')
  //     .options({
  //       esModule: false,  // 一定要设置为 false，否则会导致样式文件无法加载
  //     })
  //     .end();
  // }
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: ['style-loader', 'css-loader']
  //       }
  //     ]
  //   }
  // }
})
