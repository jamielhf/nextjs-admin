const withCss = require('@zeit/next-less')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withCss({
  lessLoaderOptions: { // less-loader 的配置是lessOptions  next-less 还是lessLoaderOptions，导致配置无效
    javascriptEnabled: true,
    cssModules: false,
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
})