'use strict';
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      browserSync = require('browser-sync').create();

let postcssPlugins = [
  autoprefixer({browsers: 'last 2 versions'}),
  cssnano({core:false})
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
  gulp.watch('./test/**.html').on('change', browserSync.reload)
});
