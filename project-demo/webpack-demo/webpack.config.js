/**
 ** 这是最简单的一个配置,配置文件可以有多个
 **
 **/
const path = require('path');
const globby = require('globby');
// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除dist并重新加载
const CleanWebpackPlugin = require('clean-webpack-plugin');
//用于访问内置插件
const webpack = require('webpack');
//css分开打包
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const devMode = process.env.NODE_ENV !== 'production';

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// 创建多个实例
const extractCSS = new ExtractTextPlugin('./css/[name]-one.css');
const extractSass = new ExtractTextPlugin('./css/[name]-two.css');
const config = new Array();

config[0] = {
	// Use env.<YOUR VARIABLE> here:
	// console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
	// console.log('Production: ', env.production); // true
	// 模式
	mode: 'production',
	// mode: 'development',
	target: 'web', // <=== 默认是 'web'，可省略
	// 入口 **分离 应用程序(app) 和 第三方库(vendor) 入口88//
	entry: {
		index: './src/index.js',
		print: './src/js/print.js',
		// number: './src/webpack-numbers.js',
		// reset: './src/common/reset.scss'
		//++css 分开打包
		// getCSSEntries(CSS_PATH.css)
	},
	//生产工具中 错误位置
	devtool: 'inline-source-map',

	devServer: {
		contentBase: './dist',
		hot: true
	},
	// 插件
	plugins: [
		new CleanWebpackPlugin(['dist']), //
		new HtmlWebpackPlugin({
			title: "首页",
			filename: 'index.html',
			template: 'src/assets/index.html'
		}),
		// Generates default index.html
		new HtmlWebpackPlugin({ // Also generate a about.html
			title: '关于',
			filename: 'about.html',
			template: 'src/assets/about.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({　　
			filename: "./css/[name].[chunkhash:8].css", //静态命名
			chunkFilename: "./css/[id].css"　　 //动态命名
		})
	],
	//出口
	output: {
		// filename: 'js/main.js',
		filename: './js/[name].js',
		path: path.resolve(__dirname, 'dist'),
		// publicPath: '/',
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vender: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}

		},
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	externals: {
		loadsh: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_'
		}
	},
	module: {
		rules: [{
				// test: /\.(html)$/,

				// use: {
				// 	loader: 'html-loader',
				// 	options: {
				// 		attrs: [':data-src']
				// 	}
				// }
			}, {
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
				// use: ExtractTextPlugin.extract({
				// 	fallback: "style-loader",
				// 	use: "css-loader"
				// })
			}, {
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader?modules=true", "sass-loader"]

			},

			{
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
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader'
			}, {
				test: /\.tsx?$/,
				use: [{
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
						experimentalWatchApi: true,
					}
				}],
			}, {
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: 'babel-loader!eslint-loader'
					}
				}
			}
		]
	}
}

module.exports = config;

// config = env =>{
// 	// Use env.<YOUR VARIABLE> here:
//   console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
//   console.log('Production: ', env.production); // true
// }

// module.exports = config;