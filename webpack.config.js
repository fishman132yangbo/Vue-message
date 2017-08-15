var path = require('path');
module.exports = {
    entry: './src/lib/index.js',
    output: {
        path:path.join(__dirname,''),
        filename: 'vue-messagebox-demo.js',
        libraryTarget:'umd',
        library:'vueMessageboxs'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                exclude:/node_modules/,
                options:{
                    loaders:{
                        scss:'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/
            }
        ]
    },
    plugins:[


    ]
}