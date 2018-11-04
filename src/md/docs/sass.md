# Sass
Si va a trabajar con Sass, tenga en cuenta que [como se explicó aquí](css.html), ed-grid genera dos grupos de código css:
* `cssCore` no recomendado si va a trabajar con Sass (desactivado por defecto para Sass)
* `cssHelpers` recomendado si va a trabajar con Sass (activado por defecto para Sass, puede desactivarlo si es un usuario avanzado)

Para activar o desactivar estos componentes redefina las variables `$cssCore` y `$cssHelpers` antes de importar ed-grid.

```scss
$cssCore: false;
$cssHelpers: true;
@import "path/ed-grid/ed-grid"
```

Se recomienda añadir los siguientes plugins de postCSS al compilar la versión Sass:
- <a href="http://autoprefixer.github.io/" target="_blank">autoprefixer <span class="icon-link-external"></span></a> añade los prefijos necesarios para asegurar compatibilidad entre navegadores
- <a href="http://cssnano.co/" target="_blank">cssnano <span class="icon-link-external"></span></a> - minifica, optimiza y compacta el código CSS.

El siguiente es un flujo recomendado con Gulp

```JavaScript
'use strict';
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano = require('cssnano');

let sassOptions = {
  outputStyle: 'compressed'
};

let postcssPlugins = [
  autoprefixer({browsers: 'last 2 versions'}),
  cssnano()
];

gulp.task('styles', () =>
  gulp.src('path')
      .pipe(sass(sassOptions))
      .pipe(postcss(postcssPlugins))
      .pipe(gulp.dest('path'))
);

gulp.task('sw', () =>
  gulp.watch('./**/**.scss', ['styles'])
);
```
