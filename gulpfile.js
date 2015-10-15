'use strict';

/**
 * Dependencias
 */
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect');

/**
 * Variable de entorno.
 * En la terminal se puede definir de manera opcional el puerto para cualquiera
 * de las tareas watch, un ejemplo de uso sería:
 * PORT=8080 gulp watch:all
 */
 var PORT = process.env.PORT || 7070;


/**
 * Compila los archivos sass hijos directos de la carpeta `scss/`.
 * Agrega los prefijos propietarios de los navegadores.
 * Los archivos CSS generados se guardan en la carpeta `css/`.
 */
gulp.task('sass', function () {
  var processors = [
    autoprefixer({ browsers: ['last 2 versions'] })
  ];

  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});


/**
 * Compila los archivos jade hijos directos de la carpeta `jade/`.
 * Los archivos HTML generados se guardan en la carpeta raíz del proyecto.
 */
gulp.task('jade', function() {
  gulp.src('./jade/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});


/**
 * Recarga el HTML en el navegador.
 * Creado para quienes no usen Jade.
 */
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});


/**
 * Crea un servidor local livereload
 * http://localhost:7070
 */
gulp.task('connect', function() {
  connect.server({
    // root: '.',
    port: PORT,
    livereload: true
  });
});


/**
 * Ejecuta las tareas connect y sass, queda escuchando los cambios de todos
 * los archivos Sass de la carpeta `scss/` y subcarpetas.
 */
gulp.task('watch:sass', ['connect', 'sass'], function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});


/**
 * Ejecuta las tareas connect y jade, queda escuchando los cambios de todos
 * los archivos jade de la carpeta `jade/` y subcarpetas.
 */
gulp.task('watch:jade', ['connect', 'jade'], function () {
  gulp.watch('./jade/**/*.jade', ['jade']);
});


/**
 * Ejecuta las tareas connect y html, queda escuchando los cambios de todos
 * los archivos HTML de la carpeta raíz del proyecto.
 * Creado para quienes no usen Jade.
 */
gulp.task('watch:html', ['connect', 'html'], function () {
  gulp.watch('./*.html', ['html']);
});


/**
 * Ejecuta las tareas watch:html y watch:sass
 * Creado para quienes no usen Jade.
 */
gulp.task('watch:html-sass', ['watch:html', 'watch:sass']);


/**
 * Ejecuta las tareas watch:sass y watch:jade.
 */
gulp.task('watch:all', ['watch:sass', 'watch:jade']);


/**
 * Ejecuta la tarea watch:sass.
 */
gulp.task('default', ['watch:sass']);
