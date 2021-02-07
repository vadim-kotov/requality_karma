const path = require('path');
const _ = require('lodash');

// var context = process.env.NODE_ENV || 'development';

module.exports = {
    /*
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    */

    optimization: {
        runtimeChunk: false,
        splitChunks: false
    },

    module: {
        rules: getJavaScriptLoaders()
    },

    watch: false

    /*
    devServer: {
        publicPath: '/build/'
    }
    */
};

function getJavaScriptLoaders() {
    return [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env']
            }
        }
            /*,
            {
                test: /\.js$/,
                loader: 'istanbul-instrumenter-loader',
                enforce: 'post',
                exclude: /node_modules|\.test.js$|\.mock\.js$/
            }
            */
    ];  
}