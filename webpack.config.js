
let webpack = require('webpack');
let minCss = require ('mini-css-extract-plugin');
let htmlPlugin = require ('html-webpack-plugin');
let CopyWebpackPlugin = require ('copy-webpack-plugin'); 
let path = require('path');

module.exports = {
    devtool: "source-map",
    devServer: {
        port: 3000,
        hot: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: minCss.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'production',
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              },
              {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]'
                    }
                  }
                ]
              }     
        ]
    },
    plugins: [
        new minCss ({
            filename: 'style/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, 
        }),
        new htmlPlugin({
            template: './src/public/index.html',
            filename: "./index.html"
          }),
        new htmlPlugin({
          filename: 'myWorks.html',
          template: './src/public/myWorks.html'
        }),  
        new CopyWebpackPlugin([
          { from: './src/public/img', to: './img' },
          { from: './src/public/fonts', to: './fonts' },
        ]) 
    ]
};