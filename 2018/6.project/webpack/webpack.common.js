 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');
 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 const WorkboxPlugin = require('workbox-webpack-plugin');


 module.exports = {
 	entry: {
 		index: './src/index.js',
 		another: './src/js/another-module.js',
 		math: './src/js/math.js',
 		global: './src/js/global.js',
 		vendor: ['lodash']
 		// ts: './src/index.ts'
 	},
 	output: {
 		filename: 'js/[name].bundle.js',
 		// publicPath: './dist/js',
 		path: path.resolve(__dirname, 'dist')
 	},
 	plugins: [
 		// new CleanWebpackPlugin(['dist/*.js', "dist/js/*.js","dist/js/*.map"], {
 		// 	//配置选项
 		// 	// Write logs to console.
 		// 	// verbose: true,

 		// 	// Use boolean "true" to test/emulate delete. (will not remove files).
 		// 	// Default: false - remove files
 		// 	// dry: false,
 		// }),
 		new HtmlWebpackPlugin({
 			// title: 'Production',
 			title: 'Progressive Web Application',
 			template: './src/template/index.tem.html', // 源模板文件
 			filename: './index.html', //输出文件
 			inject: true,
 			chunks: ['index', 'vendor']
 		}),
 		new HtmlWebpackPlugin({
 			title: 'Production',
 			template: './src/template/test.html', // 源模板文件
 			filename: './test.html', //输出文件,
 			inject: true,
 			chunks: ['vendor']

 		}),
 		new WorkboxPlugin.GenerateSW({ //本地服务器
 			// 这些选项帮助 ServiceWorkers 快速启用
 			// 不允许遗留任何“旧的” ServiceWorkers
 			clientsClaim: true,
 			skipWaiting: true
 		}),
 		// new BundleAnalyzerPlugin(), //分析项目文件占用
 		new webpack.NamedModulesPlugin(),
 		new webpack.HotModuleReplacementPlugin(),
 		new webpack.HashedModuleIdsPlugin(), //开发过程中输出结果的可读性
 		new webpack.ProvidePlugin({
 			// _: 'lodash'
 			join: ['lodash', 'join']
 		}),
 		// new webpack.LoaderOptionsPlugin({
 		// 	splitChunks: {
 		// 		cacheGroups: {
 		// 			commons: {
 		// 				test: /[\\/]node_modules[\\/]/,
 		// 				name: "vendors",
 		// 				chunks: "all"
 		// 			}
 		// 		}
 		// 	},

 		// })
 	],
 	optimization: {
 		splitChunks: {
 			chunks: 'initial', // 只对入口文件处理
 			cacheGroups: {
 				vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
 					test: /node_modules\//,
 					name: '../commons/vendor',
 					priority: 10,
 					enforce: true
 				},
 				commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
 					test: /common\/|components\//,
 					name: '../commons/commons',
 					priority: 10,
 					enforce: true
 				}
 			}
 		},
 		runtimeChunk: {
 			name: '../commons/manifest'
 		}
 	},
 	// optimization: {
 	// 	splitChunks: {
 	// 		name: 'vendor'
 	// 	}
 	// },
 	resolve: {
 		extensions: ['.tsx', '.ts', '.js']
 	},
 	module: {
 		rules: [

 			{
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
 			}, {
 				test: /\.tsx?$/,
 				use: 'ts-loader',
 				exclude: /node_modules/
 			}, {
 				test: /\.(ejs|tpl)$/,
 				loader: 'ejs-loader',

 			},
 			// {
 			// 	test: /\.(html)$/,
 			// 	use: {
 			// 		loader: 'html-loader',
 			// 		options: {
 			// 			attrs: [':data-src']
 			// 		}
 			// 	}
 			// }
 			// , {
 			// 	test: "./src/index.js",
 			// 	use: "imports-loader?this=>window"
 			// }
 			// , {
 			// 	test: './src/global.js',
 			// 	use: 'exports-loader?file,parse=helpers.parse'
 			// }
 		]
 	}
 };