var path = require('path')
var nib = require('nib')
var jeet = require('jeet')
var rupture = require('rupture')

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    filename:'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets:['es2015', 'react']}},
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      {test: /\.(svg|png|gif)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  stylus: {
    use: [nib(), jeet(), rupture()]
  }
};
