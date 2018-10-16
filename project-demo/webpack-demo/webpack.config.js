/**
 ** 这是最简单的一个配置,配置文件可以有多个
 **
 **/
const path = require('path');
// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除dist并重新加载
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		// index: './src/index.js',
		// print: './src/js/print.js'
		index: './src/index.js'
	},
	//生产工具中 错误位置
	devtool: 'inline-source-map',
	mode: 'production',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		// new CleanWebpackPlugin(['dist']), //
		new HtmlWebpackPlugin(), // Generates default index.html
		new HtmlWebpackPlugin({ // Also generate a about.html
			filename: 'about.html',
			template: 'src/assets/about.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		// filename: 'js/main.js',
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
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
			use: [
				'file-loader'
			]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.(csv|tsv)$/,
			use: [
				'csv-loader'
			]
		}, {
			test: /\.xml$/,
			use: [
				'xml-loader'
			]
		}]
	}
};