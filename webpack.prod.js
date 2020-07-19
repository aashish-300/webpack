const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");//delete the previous hash file and replace it with new file 
const MiniWebpackPlugin = require('mini-css-extract-plugin');//extract css content into new css file
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//minify css content 
const TerserPlugin = require('terser-webpack-plugin');//to minify javascript file
var HtmlWebpackPlugin = require('html-webpack-plugin');//to get the  all the html content in webpack for bundle

module.exports = merge(common,{
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "production",
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments:true,
                }
            })
        ]  
    },
    plugins: [new MiniWebpackPlugin({ filename: "[name].[contentHash].css" }), new CleanWebpackPlugin()],
    module: {
        rules: [
                 {
                test: /\.css$/,//takes all file ends with .css
                use: [
                    MiniWebpackPlugin.loader//extract css into files
                    , "css-loader"//convert css into javascript
                ]
            },
        ]
    } 
   
});