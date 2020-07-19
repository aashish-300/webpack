const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');//merge helps in unite with other webpack file
var HtmlWebpackPlugin = require('html-webpack-plugin');//to get the  all the html content in webpack for bundle

module.exports = merge(common,{
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
     plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
        //template takes all the content of file and copy it to the file created by 
        // new HtmlWebpackPlugin, by default index.html
    })],
    module:{
        rules: [
                 {
                test: /\.css$/,//takes all file ends with .css
                use: [
                    "style-loader"//to inject all the content in dom 
                    , "css-loader"//convert css into javascript
                ]
            },
        ]
    }
 
});