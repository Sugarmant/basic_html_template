const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirname = __dirname.replace('build','')
module.exports = {
    entry: dirname+'/src/app.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(dirname,'dist'),
        clean:true
    },
    module:{
        rules:[
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            }
        ],
    },
    devtool: 'inline-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template:dirname+'/public/index.html',
            filename:'index.html'
        })
    ]
};