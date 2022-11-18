const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appdir = 'twinklecube';

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, appdir, 'index.tsx'),
    output: {
        path: path.join(__dirname, appdir, 'dist'),
        publicPath: "",
        filename: "index.js"
    },
    devServer: {
        port: 3030,
        historyApiFallback: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    "style-loader",
                    "css-loader", 
                    "sass-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp|woff|woff2|ttf|otf|eot)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, appdir, 'index.html'),
            favicon: path.resolve(__dirname, appdir, 'favicon.ico')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}
