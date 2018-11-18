import path from 'path';

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
                options: {
                    cacheDirectory: true,
                },
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
};
