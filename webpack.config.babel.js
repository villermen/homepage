import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const babelLoaderOptions = {
    cacheDirectory: true,
};

export default {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        filename: 'main.js?[contenthash]',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: babelLoaderOptions,
            },
            {
                test: /\.(jpg|png)$/,
                include: path.resolve(__dirname, 'assets'),
                loader: 'url-loader',
                options: {
                    limit: 51200, // 50 KiB
                    fallback: 'file-loader',
                    name: '[path][name].[ext]?[hash]',
                },
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, 'assets'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelLoaderOptions,
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true,
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        alias: {
            assets: path.resolve(__dirname, 'assets'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'assets/index.html',
            favicon: 'assets/favicon.ico',
            xhtml: true,
        }),
    ]
};
