const webpack  = require('webpack')

// 900kb to 400kb comparisson
module.exports = new webpack.optimize.UglifyJsPlugin({
  sourceMap: false,
  mangle: {
      except: ['exports', 'require']
  },
  output: {
      'comments': false
  },
  compress: {
      'unused': true,
      'dead_code': true,
      'warnings': false
  }
})
