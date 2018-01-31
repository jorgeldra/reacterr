const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebackPlugin = require('extract-text-webpack-plugin');
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]';

module.exports = {
    resolve : {
        extensions : ['.js','.jsx']
    },
    entry : ['./src/index.jsx'],
    output : {
        filename : 'app.js',
        path : __dirname + '/build/',
        publicPath : '/'
    },
    module : {
        loaders : [
            {
                test : /(\.js|jsx)$/,
                exclude : /node_modules/,
                loaders : ['babel-loader']
            },
            {
                test : /\.css$/,
                loaders : `style-loader!css-loader?${cssModules}`
            }

        ]
    },
    devServer : {
        host : '0.0.0.0',
        port : 8080,
        inline : true
    },
    plugins : [
        new HtmlWebpackPlugin({template : './src/assets/index.html'}),
        new ExtractTextWebackPlugin('style.css', { allChunks: true})
    ]
}