 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
 	devtool: 'inline-source-map',
 	devServer: {
 		contentBase: './dist/',
 		compress: true,
 		inline: true, //设置为true，当源文件改变的时候会自动刷新
 		port: 9000,
 		hot: true
 	}
 });