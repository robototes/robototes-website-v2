import path from 'path'

import autoprefixer from 'autoprefixer'

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
      },
      {
        test: /\.s[a|c]ss$/,
        include: path.resolve(__dirname, 'src', 'css'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function () {
                return [
                  autoprefixer
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src', 'css'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer
              ]
            }
          }
        ]
      },
      {
        test: /\.ya?ml$/,
        include: path.resolve(__dirname, 'src', 'configs'),
        use: [
          'json-loader',
          'yaml-loader'
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
    })
  ]
}
