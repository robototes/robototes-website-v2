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
      {
        test: /\.(js|es\d?)$/,
        include: path.resolve(__dirname, 'src', 'js', 'app'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'latest',
                'babili'
              ],
              plugins: [
                'add-module-exports',
                'transform-async-to-generator',
                'transform-runtime'
              ]
            }
          }
        ]
      }
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
