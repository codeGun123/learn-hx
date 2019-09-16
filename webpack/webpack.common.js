const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpckplugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        // new ClearWebpckplugin(['dist']),
        new HtmlWebpackPlugin({
            title: '通用配置'
        }),
        new webpack.HotModuleReplacementPlugin()

    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    }
};
