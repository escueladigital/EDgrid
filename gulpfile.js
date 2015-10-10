'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var connect = require('gulp-connect');

gulp.task('css', function () {
  var processors = [
    autoprefixer({ browsers: ['last 2 versions'] })
  ];

  return gulp.src('./scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('./jade/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    // root: '.',
    port: 7070,
    livereload: true
  });
});

gulp.task('watch', ['css', 'html'], function () {
  gulp.watch('./scss/**/*.scss', ['css']);
  gulp.watch('./jade/**/*.jade', ['html']);
});

gulp.task('start', ['connect', 'watch']);

gulp.task('default', ['css', 'html']);
