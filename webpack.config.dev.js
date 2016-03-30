var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
      loader: 'url-loader?limit=9990000&name=[name]-[hash].[ext]'
    },
    { test: /\.css$/, loader: "style-loader!css-loader" },
    {
      test: /\.svg$/,
      loader: 'svg-sprite?' + JSON.stringify({
        name: '[name]_[hash]',
        prefixize: true
      })
    }]
  }
}
