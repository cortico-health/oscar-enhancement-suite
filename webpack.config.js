const path = require('path')

module.exports = {
    entry: './cortico.js',
    output: {
      filename: 'cortico-min.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { 
                      "targets": "> 0.001%, not dead" 
                    }]
                ]
              }
            }
          }
        ]
      }
};