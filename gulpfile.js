var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer');

  // Tasks
  gulp.task("css", function() {

    var processors = [autoprefixer({browsers: ['last 3 versions', 'Firefox < 27']})];

    return gulp.src('./*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('dest/'));

  });
