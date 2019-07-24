import gulp from 'gulp'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import browserSync from 'browser-sync'
import sourcemaps from 'gulp-sourcemaps'
import browserify from 'browserify'
import babelify from 'babelify'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'
import rename from 'gulp-rename'
import pug from 'gulp-pug'
import watch from 'gulp-watch'
import minify from 'gulp-minify'
import imagemin from 'gulp-imagemin'
import sitemap from 'gulp-sitemap'
import cachebust from 'gulp-cache-bust'
import tildeImporter from 'node-sass-tilde-importer'
import data from 'gulp-data'
import fs from 'fs'


const server = browserSync.create()

const postcssPlugins = [
  autoprefixer({browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'})
]

// Compila Sass para desarrollo
gulp.task('styles-dev', () => {
  gulp.src('./src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({
      importer: tildeImporter,
      sourceComments: true,
      outputStyle: 'expanded'
    }))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./docs/css/'))
    .pipe(server.stream({match: '**/*.css'}))
})

// Compila Sass para producción
gulp.task('styles-build', () => {
  gulp.src('./src/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass({
      importer: tildeImporter,
      outputStyle: 'compressed'
    }))
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest('./docs/css/'))
    .pipe(server.stream({match: '**/*.css'}))
})

// Compila versión CSS minificada
gulp.task('css-build-min', () => {
  gulp.src('./src/scss/ed-grid-css.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(postcss(postcssPlugins))
    .pipe(rename('ed-grid.min.css'))
    .pipe(gulp.dest('./src/css/'))
})

// Compila versión CSS sin minificar
gulp.task('css-build', () => {
  gulp.src('./src/scss/ed-grid-css.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss(postcssPlugins))
    .pipe(rename('ed-grid.css'))
    .pipe(gulp.dest('./src/css/'))
})

// Compila páginas internas
gulp.task('pug-dev', () =>
  gulp.src('./src/pug/pages/**/*.pug')
    .pipe(plumber())
    .pipe(data(function () {
      return JSON.parse(fs.readFileSync('./src/data/casos-de-exito.json'))
    }))
    .pipe(pug({
      pretty: true,
      basedir: './'
    }))
    .pipe(gulp.dest('./docs'))
)

// Compila páginas internas minificadas
gulp.task('pug-build', () =>
  gulp.src('./src/pug/pages/**/*.pug')
    .pipe(plumber())
    .pipe(data(function () {
      return JSON.parse(fs.readFileSync('./src/data/casos-de-exito.json'))
    }))
    .pipe(pug({
      basedir: './'
    }))
    .pipe(gulp.dest('./docs'))
)

// Compila JavaScript sin minificar
gulp.task('scripts-dev', () =>
  browserify('./src/js/index.js')
    .transform(babelify, {
      global: true // permite importar desde afuera (como node_modules)
    })
    .bundle()
    .on('error', function (err) {
      console.error(err)
      this.emit('end')
    })
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(minify({
      ext: {
        src: '-min.js',
        min: '.js'
      }
    }))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./docs/js'))
)

// Compila JavaScript minificado
gulp.task('scripts-build', () =>
  browserify('./src/js/index.js')
    .transform(babelify, {
      global: true // permite importar desde afuera (como node_modules)
    })
    .bundle()
    .on('error', function (err) {
      console.error(err)
      this.emit('end')
    })
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(minify({
      ext: {
        src: '.js',
        min: '-min.js'
      }
    }))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./docs/js'))
)

// Copia y comprime imágenes
gulp.task('images-build', () => {
  gulp.src('./src/img/**/**')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('./docs/assets/img'))
})

// Copia imágenes para desarrollo
gulp.task('images-dev', () => {
  gulp.src('./src/img/**/**')
    .pipe(gulp.dest('./docs/assets/img'))
})

// Copia html de testing
gulp.task('html', () => {
  gulp.src('./test.html')
    .pipe(gulp.dest('./docs/'))
})

gulp.task('sitemap', () => {
  gulp.src('./docs/**/*.html', {
    read: false
  })
    .pipe(sitemap({
      siteUrl: 'https://ed-grid.com' // remplazar por tu dominio
    }))
    .pipe(gulp.dest('./docs'))
})

gulp.task('cache', () => {
  gulp.src('./docs/**/*.html')
    .pipe(cachebust({
      type: 'timestamp'
    }))
    .pipe(gulp.dest('./docs'))
})

gulp.task('dev', ['styles-dev', 'pug-dev', 'scripts-dev', 'images-dev', 'html'], () => {
  server.init({
    server: {
      baseDir: './docs'
    }
  })

  gulp.watch('./src/scss/**/**', () => gulp.start('styles-dev'))
  gulp.watch('./src/js/**/**', () => gulp.start('scripts-dev', server.reload))
  gulp.watch('./src/pug/**/**', () => gulp.start('pug-dev', server.reload))
  gulp.watch('./src/data/**/**', () => gulp.start('pug-dev', server.reload))
  gulp.watch('./src/md/**/**', () => gulp.start('pug-dev', server.reload))
  gulp.watch('./test.html', () => gulp.start('html', server.reload))
  gulp.watch('./src/img/**/**', () => gulp.start('images-dev'))
})

// Compila versión CSS para producción
gulp.task('css', ['css-build', 'css-build-min'])
gulp.task('build', ['styles-build', 'pug-build', 'scripts-build', 'images-build', 'cache', 'sitemap'])
