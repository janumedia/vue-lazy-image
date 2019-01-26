const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                loaders: ['css-loader', 'sass-loader'],
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            })
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
}

module.exports = [
    merge(config, {
        entry: path.join(__dirname, 'src/plugins.js'),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'vue-lazy-image.min.js',
            libraryTarget: 'window',
            library: 'LazyImage'
        }
    }),
    merge(config, {
        entry: path.join(__dirname, 'src/LazyImage.vue'),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'vue-lazy-image.js',
            libraryTarget: 'umd',
            library: 'lazy-image',
            umdNamedDefine: true
        }
    })
];