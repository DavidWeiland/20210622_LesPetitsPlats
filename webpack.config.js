const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:'./assets/js/index.js',
    watch : true,
    output:{
        path: path.resolve('./dist'),
        filename : 'bundle.js',
        publicPath : '/dist/',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    devtool : 'eval-cheap-module-source-map',
    mode:'none',
    plugins:[new MiniCssExtractPlugin({filename : 'style.css'})],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test:/\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //"style-loader",
                    {
                        loader: "css-loader",
                        options: { importLoaders :1 }
                    },
                    {
                        loader : "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                        "autoprefixer"
                                ]
                            }
                        },
                    },
                    "sass-loader"]
            },
        ]
    }
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