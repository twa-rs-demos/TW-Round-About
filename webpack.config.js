module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname + '/assets/',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: "style!css!less"
    }, {
      test: /\.css$/,
      loader: 'style!css!'
    }, {
      test: /\.(woff|woff2)$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf$/,
      loader: 'file-loader'
    }, {
      test: /\.eot$/,
      loader: 'file-loader'
    }, {
      test: /\.svg$/,
      loader: 'file-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }, {
      test: require.resolve('jquery'),
      loader: 'expose?$!expose?jQuery'
    }]
  }
}

