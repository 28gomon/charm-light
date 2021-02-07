const path = require('path');

module.exports = {
    entry: {
        main: './assets/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, './assets/dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}