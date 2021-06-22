const path = require('path')

module.exports = {
    entry:'./assets/js/index.js',
    watch : true,
    output:{
        path: path.resolve('./dist'),
        filename : 'bundle.js'
    },
    mode:'none',
}


module:{
    rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                  ]
                }
            }
        },
    ]

}