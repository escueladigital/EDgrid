'use strict';
const gulp = require('gulp'),
      sass = require('gulp-sass'),
			plumber = require('gulp-plumber'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat'),
      sourcemaps = require('gulp-sourcemaps'),
      babel = require('gulp-babel');

let postcssPlugins = [
  autoprefixer({browsers: 'last 2 versions'}),
  cssnano({core:true})
];

let sassOptions = {
  outputStyle: 'expanded'
};

gulp.task('styles', () =>
  gulp.src('./test/styles.scss')
      .pipe(plumber({
        errorHandler: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
      .pipe(sass(sassOptions))
      .pipe(postcss(postcssPlugins))
      .pipe(plumber.stop())
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
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
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
