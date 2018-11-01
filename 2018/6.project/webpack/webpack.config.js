// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');

// module.exports = {
// 	entry: {
// 		// app: './src/index.js', //分离的两个js
// 		// print: './src/print.js'
// 		app: "./src/index.js"
// 	},
// 	devtool: "inline-source-map", //追踪到错误和警告在源代码中的原始位置
// 	devServer: {
// 		contentBase: './dist',
// 		compress: true,
// 		// inline: true, //设置为true，当源文件改变的时候会自动刷新
// 		port: 9000,
// 		// hot: true
// 	},
// 	plugins: [

// 		new CleanWebpackPlugin(['dist']), //清除没用文件
// 		new HtmlWebpackPlugin({
// 			title: 'Output Management', //文章标题
// 			template: './src/template/index.tem.html', // 源模板文件
// 			filename: './index.html' //输出文件
// 		}),
// 		// new webpack.NamedModulesPlugin(),
// 		// new webpack.HotModuleReplacementPlugin()
// 	],
// 	output: {
// 		// filename: 'bundle.js',
// 		filename: './js/[name].bundle.js', //分离的文件命名
// 		publicPath: './',
// 		path: path.resolve(__dirname, 'dist')
// 	},
// 	module: {
// 		rules: [{
// 			test: /\.css$/,
// 			use: [
// 				'style-loader',
// 				'css-loader'
// 			]
// 		}, {
// 			test: /\.(png|svg|jpg|gif)$/,
// 			use: [{
// 				loader: 'file-loader',
// 				options: {
// 					name: '[name].[ext]',
// 					publicPath: './images/',
// 					outputPath: './images/'
// 				}
// 			}]
// 		}, {
// 			test: /\.(woff|woff2|eot|ttf|otf)$/,
// 			use: [{
// 				loader: 'file-loader',
// 				options: {
// 					name: '[name].[ext]',
// 					publicPath: './font',
// 					outputPath: './font/'
// 				}
// 			}]
// 		}, {
// 			test: /\.(csv|tsv)$/,
// 			use: ['csv-loader']
// 		}, {
// 			test: /\.xml$/,
// 			use: ['xml-loader']
// 		}]
// 	},
// 	mode: "production"

// };