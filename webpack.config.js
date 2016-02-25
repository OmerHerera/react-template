var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './target');
var APP_DIR = path.resolve(__dirname, './src');

var config = {
    devtool: 'cheap-eval-source-map',
    entry: [
        APP_DIR + '/index.jsx',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        contentBase: './target',
        hot: true
    }
};

module.exports = config;
