'use strict';
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat');

let postcssPlugins = [
  autoprefixer({browsers: 'last 2 versions'}),
  cssnano({core:true})
];

let sassOptions = {
  outputStyle: 'expanded'
};

gulp.task('styles', () =>
  gulp.src('./test/styles.scss')
      .pipe(sass(sassOptions))
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest('./test'))
      .pipe(browserSync.stream())
);

gulp.task('compileCoreEdgrid', () =>
  gulp.src('./ed-grid.scss')
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest('./css'))
);

gulp.task('scripts', () =>
  gulp.src('./js/*.js')
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('./test'))
);

gulp.task('sw', () =>
  gulp.watch('./**/**.scss', ['styles'])
);

gulp.task('default', () => {
  browserSync.init({
    server: {
      baseDir: './test' //para pruebas con la carpeta test
    }
  });
  gulp.watch('./**/**.scss', ['styles']);
  gulp.watch('./js/*.js', ['scripts']);
  gulp.watch('./test/**.html').on('change', browserSync.reload);
  gulp.watch('./js/*.js').on('change', browserSync.reload);
});
