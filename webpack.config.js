'use strict';
const webpack = require('webpack');
const path = require('path');

const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


module.exports = {
	// 入口文件
	entry:{
		app:path.join(__dirname,'./src/app.js')
	},
	output:{
		path:path.join(__dirname,'./build'),
		filename:'[name]-bundle-[hash].js'
	},
	// resolve: {
	// 	// 别名
 //        alias: {
 //            'vue$': 'vue/dist/vue.js'
 //        }
 //    },

	// 开发模式
	mode:'development',
	devServer:{
		contentBase:path.join(__dirname,'./build'),
		port:8000,
		open:true,
		// proxy:{
		// 	"/api":{
		// 		target:"http://api.douban.com/v2/movie",
		// 		changeOrigin: true,
		// 		pathRewrite: {'^/api' : ''}
		// 	},
		// 	"/images":{
		// 		target:"http://img7.doubanio.com/view/photo/s_ratio_poster/public",
		// 		changeOrigin: true,
		// 		pathRewrite: {'^/images' : ''}
		// 	}
		// }
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:'路由配置',
			template:'src/index.html'
		}),
		// new CopyWebpackPlugin([
		// 	{
		// 		from:'./app/img',
		// 		to:'./img'
		// 	}
		// ]),
		new CleanWebpackPlugin('build'),

		// Vue-loader的使用在15.*之后的版本都需要伴随 VueLoaderPlugin
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			{ 
				test: /\.vue$/, 
				use: 'vue-loader'
			},
			{ 
				test: /\.css$/, 
				use: ['style-loader','css-loader']  
			},
			{
				test:/\.scss$/,
				use:['style-loader','css-loader','sass-loader']
			},
			{
				test:/\.js$/,
				exclude:path.resolve(__dirname,'./node_modules'),
				use:[{
					loader:'babel-loader',
					options:{
						presets:['env']
					}
				}]
			}
		]
	}
}