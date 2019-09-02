const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    hot: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
       	 test: /\.m?js$/,
      	 exclude: /(node_modules|bower_components)/,
      	 use: {
        	loader: 'babel-loader',
        	options: {
          		presets: ['@babel/preset-env'],
          		plugins: ['@babel/plugin-proposal-object-rest-spread']
        	}
      		}
       },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   }
};