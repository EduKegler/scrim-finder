const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
       historyApiFallback: true,
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.(png|jpe?g|gif|jp2|webp|ttf)$/,
                include: path.join(__dirname, 'src/assets'),
                loader: 'file-loader' 
            },
            {
                test: /\.(ts)x?$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

        ]
    }
}