const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js', //分离的两个js
		print: './src/print.js'
	},
	devtool: "inline-source-map", //追踪到错误和警告在源代码中的原始位置
	plugins: [
		new CleanWebpackPlugin(['dist']), //清除没用文件
		new HtmlWebpackPlugin({
			title: 'Output Management', //文章标题
			template: './src/template/index.tem.html', // 源模板文件
			filename: './index.html' //输出文件
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		hot:true
	},
	output: {
		// filename: 'bundle.js',
		filename: './js/[name].bundle.js', //分离的文件命名
		publicPath: './',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: './images/',
					outputPath: './images/'
				}
			}]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: './font',
					outputPath: './font/'
				}
			}]
		}, {
			test: /\.(csv|tsv)$/,
			use: ['csv-loader']
		}, {
			test: /\.xml$/,
			use: ['xml-loader']
		}]
	},

};