//用于访问内置插件
const webpack = require('webpack');
const path = require('path');
// const globby = require('globby');
const glob = require("glob");


// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除dist并重新加载
const CleanWebpackPlugin = require('clean-webpack-plugin');
//css分开打包
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//css 分离
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//4.x之前用以压缩
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// vue引用
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");


const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = [
	new webpack.HotModuleReplacementPlugin(),
	// 调用之前先清除
	new CleanWebpackPlugin(['dist']), //
	// 4.x之前可用uglifyjs-webpack-plugin用以压缩文件，4.x可用--mode更改模式为production来压缩文件
	// new uglifyjsWebpackPlugin(),
	// new copyWebpackPlugin([{
	//     from: path.resolve(__dirname,"src/assets"),
	//     to: './pulic'
	// }]),
	// 分离css插件参数为提取出去的路径
	// new webpack.NamedModulesPlugin(),
	new MiniCssExtractPlugin({　　
		filename: "./css/[name].css", //静态命名
		// chunkFilename: "./css/[id].css"　　 //动态命名
	}),
	// new ExtractTextPlugin('./css/style.css', {
	//       allChunks: true,
	//     }),
	// 全局暴露统一入口
	// new webpack.ProvidePlugin({
	// 	$: "jquery"
	// }),
	// 自动生成html模板
	new HtmlWebpackPlugin({
		title: "首页",
	// chunks: ['a',"jquery"],  // 按需引入对应名字的js文件
		filename: 'index.html',
		template: 'src/assets/index.html',
		chunks:['index','vendors','runtime']
	}),
	// Generates default index.html
	new HtmlWebpackPlugin({ // Also generate a about.html
		title: '关于',
		filename: 'about.html',
		template: 'src/assets/about.html',
		chunks:['about','vendors','runtime'] // 按需引入对应名字的js文件
	}),
	// make sure to include the plugin!
	new VueLoaderPlugin()
]