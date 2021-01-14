/* eslint-disable */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolve = require('./_resolve.js')
const webpack = require('webpack')

const moduleRules = [
  {
    test: /\.js$|.jsx$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    include: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: false,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: 'postcss-loader',
      },
    ],
  },
  {
    test: /\.(jpe?g|png|ico|gif|otf)$/i,
    loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: '[name]_[hash]',
        },
      },
    ],
  },
]

module.exports = config => {
  config.plugins = [...config.plugins, new webpack.HashedModuleIdsPlugin()]

  config.optimization = {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](?!(redux-logger|redux-devtools-extension)\/).*/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `yarn.${packageName.replace('@', '')}`
          },
        },
      },
    },
  }

  config.module.rules = moduleRules
  config.resolve = resolve
}