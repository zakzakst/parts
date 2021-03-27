/* eslint-disable no-undef */
const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('../webpack.config');

// webpackの実行
function webpackFunc() {
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest('src/public/js'));
}

exports.webpack = webpackFunc;
