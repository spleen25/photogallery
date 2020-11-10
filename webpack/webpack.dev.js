const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(css)(\?.+)?$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    writeToDisk: true,
    historyApiFallback: true
    // hot: false,
    // inline: false
  },
  plugins: []
});
