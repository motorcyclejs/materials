const path = require('path');

const config = {
  devtool: 'sourcemap',

  entry: [
    path.resolve('docs/app.ts'),
  ],

  output: {
    path: path.resolve('./docs'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/',
  },

  devServer: {
    inline: true,
    host: '0.0.0.0',
    contentBase: path.resolve('./docs'),
    historyApiFallback: true,
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },

  resolve: {
    // module and jsnext:main are for tree-shaking compatibility
    mainFields: ['module', 'jsnext:main', 'browser', 'main'],
    extensions: ['.ts', '.js', '.json'],
  }
};

module.exports = config;