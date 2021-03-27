const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const rename = require('gulp-rename');

// SCSSのビルド
function scssBuild() {
  const scssPath = {
    src: './src/work/style.scss',
    dist: './src/public/css',
  };
  return gulp.src(scssPath.src)
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest(scssPath.dist));
}

exports.scssBuild = scssBuild;
