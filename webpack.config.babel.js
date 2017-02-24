import path from 'path'

import HTMLPlugin from 'html-webpack-plugin'

export default {
  entry: {
    app: './src/js/app/'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      
    ]
  },
  plugins: [
    new HTMLPlugin({
      title: 'Team 2412 - The Robototes',
      filename: 'index.html',
      chunks: [ 'app' ],
      minify: {
        collapseWhitespace: true
      }
    }),
  ]
}
