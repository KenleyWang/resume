const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
  },
})
