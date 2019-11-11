const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8800,
    publicPath: '/dist/',
    contentBase: './public',
  }
}