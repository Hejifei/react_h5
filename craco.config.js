const CracoLessPlugin = require('craco-less');
// const {loaderByName} = require('@craco/craco')
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const webpack = require('webpack')
const WebpackBar = require('webpackbar');
const path = require('path');

const lessModuleRegex = /\.module\.less$/;

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
        // A callback function that receives two arguments: the webpack rule, and the context. You must return an updated rule object.
        modifyLessRule: (lessRule, context) => {
            lessRule.test = lessModuleRegex;
            lessRule.exclude = /node_modules|antd\.css/;
            return lessRule;
        },
        // Passing an options object to configure the css-loaders
        cssLoaderOptions: {
            modules: { localIdentName: "[local]_[hash:base64:5]" },
        },
      },
    },
  ],
  webpack: {
    plugins: [
      //  打包进度条
      new WebpackBar()
    ],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    //  修改打包输出目录
    configure: (webpackConfig, {
      env, paths
    }) => {
      // paths.appPath='public'
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
          path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
          publicPath: '/'
      }
      return webpackConfig
    }
  },
  style: {
    css: {
      loaderOptions: {
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCaseOnly',
        },
      },
    },
  },
  // style: {
  //   postcss: {
  //     mode: "file",
  //     plugins: [
  //       require('tailwindcss'),
  //       require('autoprefixer')(overrideBrowserslist=['last 20 versions', 'android >= 4.0', 'iOS >= 7']),
  //       require('postcss-px-to-viewport-with-include')( {
  //         unitToConvert: 'px', // 要转化的单位
  //         viewportWidth: 375, // UI设计稿的宽度
  //         viewportHeight: 667, // UI
  //         unitPrecision: 6, // 转换后的精度，即小数点位数
  //         // propList: 当有些属性的单位我们不希望转换的时候，可以添加在数组后面，并在前面加上!号，如propList: ["*","!letter-spacing"],这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的
  //         propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  //         viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  //         fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  //         // 转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，就不会被匹配。比如selectorBlackList: ['wrap'],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
  //         selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，
  //         minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  //         mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  //         replace: true, // 是否转换后直接更换属性值
  //         exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  //         // include: [/node_modules/],
  //         landscape: false, // 是否处理横屏情况
  //       }),
  //     ],
  //   },
  // },

};
