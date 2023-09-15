'use strict';

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const isProduction = ['production'].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: isProduction ? '/vue2-front-training/' : '/',
  // 是否開啟 ESlint 檢測
  lintOnSave: true,
  // 是否在打包時產出 Source Map
  productionSourceMap: !isProduction,
  devServer: {
    server: 'https',
    // 啟動後開啟瀏覽器
    open: true,
    // 設置主機地址
    host: process.env.VUE_APP_HOST,
    // 設置默認埠號
    port: process.env.VUE_APP_PORT,
    // 啟用 HTTPS 協定
    https: true,
  },
  // 全局 scss
  css: {
    // 是否將 components 中的 css 提取至獨立的 CSS 文件
    // (非動態注入到 JavaScript inline 代碼中)
    extract: isProduction,
    // 是否產出 CSS Source Map
    sourceMap: !isProduction,
    loaderOptions: {
      // 全局引入變數
      scss: {
        additionalData: `@import "@/styles/global-var.scss";`,
      },
    },
  },
  // Webpack 設定
  configureWebpack: {
    name: 'Vue2 Front Training',
    // 配置目錄解析別名
    resolve: {
      // 讓 Webpack 5 支援 node.js 路徑 API
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
    plugins: [
      // Loadsh 按需引入
      new LodashModuleReplacementPlugin(),
    ],
    devtool: isProduction ? false : 'eval-cheap-module-source-map',
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          // 並行處理
          parallel: true,
          // 分離註解
          extractComments: true,
        }),
      ],
      // 對於每個運行模組，引入的 mode 會被分別初始化
      // 每次 build 不更動 webpack 編譯時會重置檔案編號的情況
      runtimeChunk: true,
    },
  },
  chainWebpack: (config) => {
    // 移除 prefetch 插件，避免加載多餘的資源
    config.plugins.delete('prefetch');
    // 移除 preload 插件，避免加載多餘的資源
    config.plugins.delete('preload');
    // public/index.html - Meta
    config.plugin('html').tap((args) => {
      args[0].title = 'Front-End Pad';
      return args;
    });
    // 加載 markdown 文件
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        preset: 'default',
        breaks: true,
        raw: true,
        typographer: true,
      });

    // ==================== 生產環境配置 ====================
    if (isProduction) {
      config.mode = 'production';
      // 分割公用模組
      config.optimization.splitChunks({
        chunks: 'all',
        minSize: 20480,
        minChunks: 1,
        maxAsyncRequests: 10,
        maxInitialRequests: 10,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // 取得 node_modules 依賴包名稱的第一個字串當作分割包命名
              const packageName =
                module.context?.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1] ||
                module.context ||
                'vendors';

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `chunks-${packageName.replace('@', '')}`;
            },
            chunks: 'all',
            priority: 90,
            reuseExistingChunk: true,
          },
          components: {
            test: /[\\/]src[\\/]components/,
            name: 'chunk-components',
            chunks: 'initial',
            priority: 80,
          },
          default: {
            priority: 10,
            minChunks: 2,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    }
  },
};
