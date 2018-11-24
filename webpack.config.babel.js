import path from 'path';

const babelLoaderOptions = {
    cacheDirectory: true,
};

export default {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve('./dist'),
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
                    name: '[path][name].[ext]',
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
            }
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
};
