const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.221.137:8503',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    })
  );
}
