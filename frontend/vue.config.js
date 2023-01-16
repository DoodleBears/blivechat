const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const API_BASE_URL = 'http://localhost:12450'

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: API_BASE_URL,
        ws: true
      },
      '/emoticons': {
        target: API_BASE_URL
      }
    }
  },
  chainWebpack: config => {
    const APP_VERSION = `v${process.env.npm_package_version}`

    config.plugin('define')
      .tap(args => {
        let defineMap = args[0]
        let env = defineMap['process.env']
        env.APP_VERSION = JSON.stringify(APP_VERSION)
        return args
      })
    config.module
      .rule('monaco-editor-babel-loader')
      .test(/monaco-editor[\\/].*\.js$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
    config
      .plugin('monaco-editor')
      .use(MonacoWebpackPlugin, [{ languages: ['css'] }])
  },
}
