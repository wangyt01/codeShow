 const webpack = require('webpack');
 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
 	devtool: 'source-map',
 	// devtool: false,
 	plugins: [
 		new CleanWebpackPlugin(['dist/*.js', "dist/js/*.js","dist/js/*.map"], {
 		// 	//配置选项
 		// 	// Write logs to console.
 		// 	// verbose: true,

 		// 	// Use boolean "true" to test/emulate delete. (will not remove files).
 		// 	// Default: false - remove files
 		// 	// dry: false,
 		}),
 		// new UglifyJSPlugin({ //代码压缩整理
 		// 	sourceMap: false, //生产map文件，把错误信息映射到.map文件
 		// }),
 		new webpack.DefinePlugin({
 			'process.env.NODE_ENV': JSON.stringify('production')
 		})
 	]
 });