const path = require('path')

module.exports = {
    chainWebpack: config => {
        const apiClient = process.env.VUE_APP_API_CLIENT
        config.resolve.alias.set(
            'api',
            path.resolve(__dirname, `src/api/${apiClient}`)
        )
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/sborka/'
    : '/',
    assetsDir: 'assets',
    productionSourceMap: false
   
}
