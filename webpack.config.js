const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.tsx',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: './app.bundle.js'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".jpg", ".png"],
		alias: {
			'images': path.resolve(__dirname, '/src/assets/images')
		}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: path.join(__dirname, 'src'),
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				test: /\.(jpg|png|svg)$/,
				include: path.join(__dirname, 'src'),
				loader: 'file-loader'
			},
			{
				test: /\.(woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 50000,
					mimetype: 'application/font-woff',
					name: './assets/fonts/[name].[ext]'
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 3000,
		stats: 'minimal',
		hot: true,
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				title: "React Webpack Starter",
				template: "./src/index.html",
				minify: {
					collapseWhitespace: true
				},
				hash: true,
				cache: true
			}
		),
		new ExtractTextPlugin(
			{
				filename: 'main.bundle.css',
				disable: true,
				allChunks: true
			}
		),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};