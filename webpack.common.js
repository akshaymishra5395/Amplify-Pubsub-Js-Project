const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');      
//comment above two if not using main.js directly in index.html. 

const path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: ['index.html']
        }),
        new webpack.HotModuleReplacementPlugin(),
        //comment above two if not using main.js directly in index.html. 
        
        new BundleTracker({filename: './webpack-stats.json'})
    ]
}; 