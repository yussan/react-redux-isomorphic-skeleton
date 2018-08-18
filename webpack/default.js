const webpack  = require('webpack')
const Path = require('path')
const AssetsPlugin = require('assets-webpack-plugin')
const BUILD_DIR = '../assets/build/'

module.exports = {
  entry: {
      app: ['./src/client/index.js'],
      vendor: ['react','react-dom','react-router','redux','react-redux','redux-thunk']
  },

  output: {
      path: Path.resolve(__dirname, BUILD_DIR),
      filename: process.env.NODE_ENV == 'production' ? '[name].[hash].js' : '[name].js',
      publicPath: '/assets/build/'
  },

  plugins: [
    new AssetsPlugin({prettyPrint: true, path: Path.join(__dirname, '../src/config')}),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: process.env.NODE_ENV == 'production' ? 'vendor.[hash].js' : 'vendor.js',
        minChunks: Infinity
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    babelrc: false,
                    presets: ["es2015", "react"],
                    plugins: ["transform-class-properties", "syntax-dynamic-import"],
                    env: {
                      production: {
                        presets: []
                      }
                    }
                  }
                }
              ]             
          }
      ]
  }

}
