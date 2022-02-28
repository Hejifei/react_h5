const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.221.137:8503',
      // target: 'http://127.0.0.1:4523/mock/675017',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    })
  );
}
