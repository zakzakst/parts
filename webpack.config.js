/* eslint-disable no-undef */
const TerserPlugin = require('terser-webpack-plugin');
// const environment = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    // NOTE: 作業用に一時コメントアウト
    // 'script': './src/work/script.ts',
    // 'scroll-anim': './src/work/scroll-anim.ts',
    'utilities': './src/work/utilities.ts',
  },
  resolve: {
    extensions: [
      '.js',
      '.ts',
    ],
  },
  output: {
    path: `${__dirname}/dist/js`,
    filename: '[name].js'
  },
  mode: 'production', // production development
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ]
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        terserOptions: {
          // compress: {drop_console: true},
        },
      }),
    ],
  },
};
