const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/script/index.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build/script'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/script')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../style/[name].css'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    }
};
