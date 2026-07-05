import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
    },
};

export default {
    entry: {
        main: path.resolve(import.meta.dirname, 'src/index.tsx'),
    },
    output: {
        filename: '[name].js?[contenthash:8]',
        chunkFilename: '[name].js?[contenthash:8]',
        path: path.resolve(import.meta.dirname, 'public'),
        publicPath: '/home/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    babelLoader,
                ],
            },
            {
                test: /\.svg$/,
                include: path.resolve(import.meta.dirname, 'assets'),
                use: [
                    babelLoader,
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|exe|gmk|8xg|8xp)$/,
                include: path.resolve(import.meta.dirname, 'assets'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // Removes the leading /assets/. Could be done using the
                            // regExp option but it does not convert Windows'
                            // backslashes for some reason
                            name: (path) => path
                                    .substr(import.meta.dirname.length + '/assets/'.length)
                                    .replace(/\\/g, '/')
                                + '?[hash:8]',
                        },
                    }
                ],
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(import.meta.dirname, 'src'),
            path.resolve(import.meta.dirname, 'node_modules'),
        ],
        alias: {
            assets: path.resolve(import.meta.dirname, 'assets'),
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
    ],
    devServer: {
        static: {
            directory: path.join(import.meta.dirname, 'public'),
        },
        historyApiFallback: true,
    },
};
