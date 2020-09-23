const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'assets/webpack_bundles'),
        library: 'AmplifyPoint'
    },
    plugins: [new CleanWebpackPlugin()]
});