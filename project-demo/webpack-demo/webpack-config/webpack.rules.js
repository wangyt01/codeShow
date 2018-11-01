const path = require('path');
//用于访问内置插件
const webpack = require('webpack');
const globby = require('globby');

//css 分离
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//css 分离
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const rules = [
	// {
	// 		test: /\.(html)$/,

	// 		use: {
	// 			loader: 'html-loader',
	// 			options: {
	// 				attrs: [':data-src']
	// 			}
	// 		}
	// 	},
	{
		test: /\.css$/,
		use: [
			MiniCssExtractPlugin.loader,
			// 'vue-style-loader',
			"css-loader"
		]
		// use: ExtractTextPlugin.extract({
		// 	fallback: "style-loader",
		// 	use: [
		// 		'vue-style-loader',
		// 		"css-loader"
		// 	]
		// })
	}, {
		test: /\.vue$/,
		loader: 'vue-loader',
		options: {
			loaders: {
				'js': 'babel-loader!eslint-loader',
				// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
				// the "scss" and "sass" values for the lang attribute to the right configs here.
				// other preprocessors should work out of the box, no loader config like this necessary.
				'scss': [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				],
				'sass': [
					'vue-style-loader',
					'css-loader',
					'sass-loader?indentedSyntax'
				]
			}
		}
	}
	// , 
	// {
	// 	test: /\.css$/,
	// 	use: [
	// 		// MiniCssExtractPlugin.loader,
	// 		'vue-style-loader',
	// 		"css-loader"
	// 	]
	// }
	, {
		test: /\.sass$/,
		use: [
			'vue-style-loader',
			'css-loader',
			'sass-loader?indentedSyntax'
		],
	}, {
		test: /\.scss$/,
		use: [
			'vue-style-loader',
			'css-loader',
			'sass-loader'
		],
	}, {
		test: /\.ts$/,
		use: 'ts-loader'
	}, {
		test: /\.(png|svg|jpg|gif)$/,
		use: [{
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				publicPath: './images/',
				outputPath: '/images/'
			}
		}]
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
	}, {
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	}, {
		test: /\.tsx?$/,
		use: [{
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
				experimentalWatchApi: true,
			}
		}]
	}
]

module.exports = rules;