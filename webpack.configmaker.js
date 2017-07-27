const webpack = require('webpack');
const path = require('path');
const GaugePlugin = require('gauge-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BASE_PATH = path.join(path.resolve(__dirname), 'PROJECT');
const APP_PATH = path.join(BASE_PATH, 'src');
const DIST_PATH = path.join(BASE_PATH, 'dist/');

const clean_dirs = [DIST_PATH];

const clean_options = {
    root:BASE_PATH,
    exclude:[],
    verbose: true,
    dry: false, // set to false to actually start removing files
};
let htmlPluginOptions = {
	template: require('html-webpack-template'),	
	appMountId:'app',
	mobile: true
};
if(process.env['NODE_ENV'] === 'dev'){
	htmlPluginOptions['baseHref'] = 'http://localhost:8090/';
	htmlPluginOptions['devServer'] = 'http://localhost:3000';
}

let getConfig = (clean_options) => {
		return {
			entry: {
				main: [
					path.join(APP_PATH, 'index'),
					// uncomment below for hot loading
					//'react-hot-loader/patch',
					//'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
					//'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors						
				],
        		vendor: [
					'react', 'redux', 'react-redux', 'react-router-redux', 'axios', 'redux-thunk',
				]	
			},		
			output: {
				filename: '[name]-[hash].bundle.js',
				path: DIST_PATH,
				chunkFilename: '[name]-chunk-[chunkhash].bundle.js',
				publicPath: '/'
			},
			module: {
				rules: [
					{
						test: /\.js(x)?$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',							
						}
					},
					{
						test: /\.css$/,
						use: ExtractTextPlugin.extract({
							use:[{
								loader: 'css-loader',
								options: { importLoaders: 1},
							}]
						})
					},
					{
						test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
						loader: 'url-loader?limit=10000&mimetype=application/font-woff',
					},
					{
						test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
						loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
					},
					{
						test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
						loader: 'file-loader',
					},
					{
						test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
						loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
					}
				]
			},
			resolve:{
				extensions: [' ', '.js','.jsx','.css']
			},
			plugins: [
				new HtmlWebpackPlugin(htmlPluginOptions),
				new CleanWebpackPlugin(clean_dirs, clean_options),
				
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
				filename: 'vendor-[hash].bundle.js',
				minChunks(module, count) {
					var context = module.context;
					return context && context.indexOf('node_modules') >= 0;
				},
			}),
			new ExtractTextPlugin({
				filename: '[name]-[hash].bundle.css',
				allChunks: true,
			}),	

			//*********** progress bar 
			// new ProgressBarPlugin(
			// 	{
			// 		complete: chalk.bgGreen(' '),
			// 		incomplete: chalk.bgWhite('+'),
			// 		width: 60,
			// 		total: 100,
			// 		clear: false,
			// 		// clear:false,
			// 		// complete: '>',
			// 		// incomplete:'*',
			// 		format:chalk.bgGreen(chalk.black(':elapsed secs')+'  ')+'\t'+chalk.blue('[:current/:total]')+chalk.green(' { ') + ':bar' +chalk.green(' }')+chalk.red(':percent')+'\t'+chalk.red(' :msg')
			// 	}
			// ),
			GaugePlugin()
		],
		devtool:'source-map',
		stats: {
			colors: true
		}
	};
};

let config = getConfig(clean_options);

module.exports = { config: config, getConfig: getConfig, clean_options: clean_options };
