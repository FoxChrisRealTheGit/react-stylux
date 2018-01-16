var path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: [/\.js$/, /\.es6$/, /\.jsx?$/, /\.css?$/],
            include: path.resolve(__dirname, 'lib'),
            exclude: /[node_modules]/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            }
        }]
    },
    externals:{
        'react':'commonjs react'
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}
