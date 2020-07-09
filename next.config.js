const withCss = require('@zeit/next-less')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withCss({
  lessLoaderOptions: {
    javascriptEnabled: true,
    cssModules: true,
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  distDir: 'build'
})