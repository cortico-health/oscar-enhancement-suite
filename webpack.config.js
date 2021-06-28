const path = require('path')

module.exports = {
    entry: './cortico.js',
    output: {
      filename: 'cortico-min.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production'
};