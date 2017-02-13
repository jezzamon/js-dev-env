const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnvPlugin = require('webpack-dotenv-plugin');

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,  //show what is being bundled
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  node: {fs: 'empty'}, //necessary for dotenv to bundle properly
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),

    // load .env variables
    new DotEnvPlugin({
      path: './.env'
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {
        test: /assets[\\/].+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'  //attach jquery to global window environment
      },
      {test: /\.css$/, loaders: ['style','css']},
      {
			test: /\.(png|jpg|cur)$/,
//				loader: 'url'
			loader: 'url?20000'

		}, //handle bootstrap font files
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file'
		},
		{
			test: /\.(woff|woff2)$/,
			loader: 'url?prefix=font/&limit=5000'
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=application/octet-stream'
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url?limit=10000&mimetype=image/svg+xml'
		}
    ]
  }
};
