const gulp = require('gulp');
const { scssBuild } = require('./tasks/scss-build');

gulp.task('scssBuild', gulp.series(scssBuild));
