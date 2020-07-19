const path = require('path');

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor:"./src/vendor.js"
    },
    mode: "development",
   
    //below module is for css and css to bundle them in webpack configuration
    module: {
        rules: [
            {
                test: /\.html$/,
                use:["html-loader"]
            },
            {
                test: /\.(svg|png|jpg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath:"imgs"
                    }
                },

            }
        ]
    }
};