module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 跨域配置
            '/api': {
                // target: 'https://vue-ts-api.herokuapp.com/api',
                target: 'https://vuets-api.herokuapp.com/api/',
                ws: true,
                hangeOrigin: true,
                pathRewrite: {
                    '^api': ''
                }
            }
        },
        before: app => {}
    }
};