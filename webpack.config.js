// entry -> output
const path = require('path'); //node.js function


module.exports ={
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),  //this has to be an absolute path
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader', //WHICH LOADER TO RUN
            test: /\.js$/,  //ON WHAT TO RUN IT
            exclude: /node_modules/           
        },{
            test:/\.s?css$/,
            use:[       // we can set up an array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]  
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    }
}

//loader - a way how a file gets transformed when webpack uses it 