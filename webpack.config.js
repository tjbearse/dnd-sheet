const webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: './dist',
		filename: '[name].bundle.js',
		publicPath: '/charsheet/'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	devtool: 'inline-source-map',
	plugins: [
		/*
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
		*/
	]
};
