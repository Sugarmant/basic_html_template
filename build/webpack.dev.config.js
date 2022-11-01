const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirname = __dirname.replace('build','')
module.exports = {
    entry: dirname+'/src/index.js',
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
            },
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), 
                                {modules: false}]
                        ],
                        cacheDirectory: true
                    }
                },
                
            },
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