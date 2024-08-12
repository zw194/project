const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinicssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './index.js',
    clean: true //生成打包后内容之前，清空输出目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), //模板文件的位置
      filename: path.resolve(__dirname, 'dist/index.html') //生成文件的位置
    }),
    new MinicssExtractPlugin({
      filename: './index.css'
    }),
    new webpack.DefinePlugin({
      // key 是注入到打包后的前端 JS 代码中作为全局变量
      // value 是变量对应的值（在 corss-env 注入在 node.js 中的环境变量字符串）
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MinicssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
        generator: {
          filename: '/assets/[hash][ext][query]'
        }
      }
    ]
  },
  // 优化
  optimization: {
    // 最小化
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释（保证 js 代码还能压缩）
      `...`,
      new CssMinimizerPlugin()
    ],

  }
}
if(process.env.NODE_ENV === 'development')
{
    config.devtool = 'inline-source-map'
}
module.exports = config