const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist')
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                    }
                }
            },
            {
                test: /\.scss%/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ts)x?$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
}