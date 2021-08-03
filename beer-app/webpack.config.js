const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


  

module.exports = {
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {context: './src', from: '*.html', to: '.'}
            ]
        })
    ],
    
}


