// webpack.config.js
const path = require('path');
const webpack = require('webpack');

//清除dist并重新加载
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  // 入口 **分离 应用程序(app) 和 第三方库(vendor) 入口88//
  entry: {
    index: './src/index.js',
  },
  //出口
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), //
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}