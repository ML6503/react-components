const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.common').createConfig({
  target: 'client'
});

module.exports = {
  ...config,

  module: {
    ...config.module,

    rules: [
        ...config.module.rules,

        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ],
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: "asset",
          },
    ],
  },

  plugins: [
    ...config.plugins,

    new MiniCssExtractPlugin({
      filename: 'main.css',
      // filename: '[hash:16].css',
    }),
    // new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: './src/index.html',
    //     inject: 'body'  // here
    //     // inject:'./src/renderTemplate.ts'
    //  })
  ],
};
