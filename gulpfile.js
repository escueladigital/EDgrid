'use strict';
const gulp = require('gulp'),
      pug = require('gulp-pug'),
      puglint = require('gulp-pug-lint'),
      sass = require('gulp-sass'),
      sassLint = require('gulp-sass-lint'),
      babel = require('gulp-babel'),
      svgmin = require('gulp-svgmin'),
      webp = require('gulp-webp'),
      useref = require('gulp-useref'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      htmlmin = require('gulp-htmlmin'),
      image = require('gulp-image'),
      flatten = require('gulp-flatten'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano'),
      browserSync = require('browser-sync').create(),
      concat = require('gulp-concat'),
      dir = {
        src: 'src',
        dist: 'dist',
        nm: 'node_modules'
      },
      files= {
        CSS: [
          `../../${dir.nm}/prismjs/themes/prism-okaidia.css`,
          `../../${dir.nm}/prismjs/plugins/line-numbers/prism-line-numbers.css`,
          `css/estilo.css`
        ],
        mCSS: 'estilo.min.css',
        JS: [
          `../../${dir.nm}/jquery/dist/jquery.min.js`,
          `../../${dir.nm}/picturefill/dist/picturefill.min.js`,
          `../../${dir.nm}/clipboard/dist/clipboard.min.js`,
          `../../${dir.nm}/animatescroll.js/animatescroll.min.js`,
          `../../${dir.nm}/prismjs/prism.js`,
          `../../${dir.nm}/prismjs/plugins/line-numbers/prism-line-numbers.min.js`,
          `js/edgrid-menu.js`,
          // `js/edgrid-migrate.js`,
          `js/jquery.nav.js`,
          `js/main.js`
        ],
        mJS: 'script.min.js',
        HTML: [
          `./public/${dir.dist}/index.html`,
        ]
      },
      opts = {
        pug: {
          pretty : true,
          locals: {
            files : files
          }
        },
        sass : { outputStyle: 'expanded' },
        es6 : { presets : ['es2015'] },
        svgmin : {
          plugins : [
            { convertColors : false },
            { removeAttrs : { attrs : ['fill'] } }
          ]
        },
        uncss : { html : [`./public/${dir.dist}/*.html`] },
        autoprefixer : {
          browsers : ['last 2 versions'],
          cascade : false
        },
        cssnano : {
          core: true
        },
        htmlmin : {collapseWhitespace: true}
      };


gulp.task('sass',() =>{
  gulp
    .src( `./public/${dir.src}/scss/*.scss` )
    .pipe( sassLint() )
    .pipe( sass( opts.sass ) )
    // .pipe(cssnano(opts.cssnano))
    .pipe( gulp.dest( `./public/${dir.dist}/css` ) );
});

gulp.task('pug',() =>{
  gulp
    .src( `./public/${dir.src}/pug/*.pug` )
    .pipe( puglint() )
    .pipe( pug( opts.pug ) )
    .pipe( gulp.dest( `./public/${dir.dist}` ) );
});

gulp.task('es6',() =>{
  gulp
    .src( `./public/${dir.src}/js/**/*.js` )
    .pipe( babel( opts.es6 ) )
    .pipe(flatten())
    .pipe( gulp.dest( `./public/${dir.dist}/js` ) );
});

gulp.task('image', function () {
  gulp
    .src(`./public/${dir.src}/img/**/*.+(png|jpg|jpeg|gif)`)
    .pipe(image())
    .pipe( gulp.dest(`./public/${dir.dist}/img`) )
});

gulp.task('svg', () => {
  gulp
    .src( `./public/${dir.src}/images/**/*.svg`,{
      base: 'src'
    })
    .pipe( svgmin(opts.svgmin) )
    .pipe( gulp.dest(`./public/${dir.dist}`) );
});

gulp.task('webp', () => {
  gulp
    .src(`./public/${dir.src}/images/**/*.+(jpg|jpeg)`,{
      base: 'src'
    })
    .pipe( webp() )
    .pipe( gulp.dest(`./public/${dir.dist}`) );
});

gulp.task('fonts', () => {
  gulp
    .src(files.fonts)
    .pipe( gulp.dest(`./public/${dir.dist}/fonts`) );
});

gulp.task('css', () => {
  gulp
    .src(files.CSS)
    .pipe( concat(files.mCSS) )
    .pipe(autoprefixer(opts.autoprefixer))
    .pipe( cleanCSS() )
    .pipe( gulp.dest(`./public/${dir.dist}/css`) );
});

gulp.task('js', () => {
  gulp
    .src( files.JS )
    .pipe( concat(files.mJS) )
    .pipe( uglify() )
    .on('error', function(err) {
      console.error('Error en la tarea fulminacion JS ', err.toString());
    })
    .pipe( gulp.dest(`./public/${dir.dist}/js`) );
});

gulp.task('html', () => {
  gulp
    .src(`./public/${dir.dist}/**/*.html`,{
      base: 'src'
    })
    .pipe( useref() )
    .pipe( htmlmin(opts.htmlmin) )
    .pipe( gulp.dest(`./public/${dir.dist}`) );
});
