const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry:'./assets/js/index.js',
    watch : true,
    output:{
        path: path.resolve('./dist'),
        filename : 'bundle.js',
        publicPath : '/dist/',
    },
    /*optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },*/
    devtool : 'eval-cheap-module-source-map',
    mode:'none',
/*
module:{
    rules:[
        {
            test:/\.css$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
            ],
        },
        
    ]
}*/
}
/*
module:{
    rules:[
        {
            test:/\.js$/,
            exclude:/(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', {targets: {browsers:["last 2 versions", "safari >= 7", "ie >= 7"]}}]
                  },
            }
        },
        
    ]
}
*/