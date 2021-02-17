/*
const path = require('path');
const _ = require('lodash');
*/

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
        /*
        {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                attributes: {
                    urlFilter: ( attribute, value ) => {
                        if( /\.css$/.test(value) ) {
                            return false;
                        }

                        return true;
                    }
                }
            }            
        },
        */

        {
            test: /jseditor\.js$/,
            loader: 'imports-loader',
            options: {
                type: 'commonjs',
                imports: {
                    moduleName: './requality_karma/src/dependencies.js',
                    name: 'dependencies'
                },
                additionalCode: 'var getExtraAttrsNames = dependencies.getExtraAttrsNames;' +
                                'var constructNodeChildren = dependencies.constructNodeChildren;'
            }
        },
        {
            test: /jseditor\.js$/,
            loader: 'exports-loader',
            options: {
                type: 'commonjs',
                exports: [ 'loadNodeSubtreeByUUID' ]
            }
        },
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