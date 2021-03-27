const gulp = require('gulp');
const { scssBuild } = require('./tasks/scss-build');
const { webpack } = require('./tasks/webpack');

gulp.task('scssBuild', gulp.series(scssBuild));
gulp.task('jsBuild', gulp.series(webpack));
