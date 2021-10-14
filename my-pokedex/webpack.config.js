const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: 'js/[name].[hash].bundle.js',
    chunkFilename: 'js/[name].[hash].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'css-loader',
          },
          cacheBusting: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[hash].[ext]',
          outputPath: 'images/',
          publicPath: '/assets/images/',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: 'fonts/',
          publicPath: '../fonts/',
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].bundle.css',
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['!fonts/*.**', '!vendor/*.**'],
    }),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.min.js',
    },
    extensions: ['.vue', '.js', '.ts'],
  },
  performance: {
    hints: false,
  },
};
