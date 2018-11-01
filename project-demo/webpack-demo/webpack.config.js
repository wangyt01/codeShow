/**
 ** 这是最简单的一个配置,配置文件可以有多个
 **
 **/
const path = require('path');
//用于访问内置插件
// const webpack = require('webpack');
const pluginsConfig = require("./webpack-config/webpack.plugins.js");
const rulesConfig = require("./webpack-config/webpack.rules.js");

//4.x之前用以压缩
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

//css 分离
const ExtractTextPlugin = require("extract-text-webpack-plugin");

config = {
	// Use env.<YOUR VARIABLE> here:
	// console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
	// console.log('Production: ', env.production); // true
	// 模式
	// mode: 'production',
	mode: 'development',
	target: 'web', // <=== 默认是 'web'，可省略
	// 入口 **分离 应用程序(app) 和 第三方库(vendor) 入口88//
	entry: {
		index: './src/index.js',
		about: './src/about.js'
		// number: './src/webpack-numbers.js',
		// reset: './src/common/reset.scss'
	},
	//出口
	output: {
		// filename: 'js/main.js',
		path: path.resolve(__dirname, 'dist'),
		filename: './js/[name].js',
		// publicPath: '/',
	},
	//开启调试模式 生产工具中 错误位置
	devtool: 'inline-source-map',
	// 插件
	plugins: pluginsConfig,
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		hot: true
	},
	optimization: {
		runtimeChunk: 'single',
		// 代码抽离
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
		rules: rulesConfig
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
}

module.exports = config;