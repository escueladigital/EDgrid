## ED-GRID

ED GRID  es un FRAMEWORK SOLO CSS para crear diseños web responsive y mobile first.

Documentación oficial: http://escueladigital.pe/ed-grid

Autor: Álvaro Felipe de Escuela Digital http://escueladigital.pe

Colaboradores:

* **Daniel Guillermo Romero** http://adsiar.com
* **Carlos Cuatin** http://carloscuatin.com

Este repositorio incluye los siguientes archivos:

* **css** - contiene ed-grid.css en su version css.
* **sass** - contiene ed-grid.scss en su version sass.

#### Instalar desde npm

```
npm install --save ed-grid
```

#### Instalar desde bower
```
bower install --save ed-grid
```

### Descargar el proyecto
https://github.com/escueladigital/ED-GRID/archive/master.zip

Luego debes copiar el archivo ed-grid.css a tu carpeta donde tienes los archivos css


### Importar ed-grid en su version SASS

#### GulpJS

Importamos ed-grid en nuestro archivo **main.scss**
```scss
@import 'ed-grid/ed-grid';
```
Usaremos el plugin [**gulp-sass**](https://github.com/dlmanning/gulp-sass) con la siguiente configuración, a la opción **includePaths** le pasamos el directorio donde se instalo ed-grid

Ejemplo npm:
```js
sass({includePaths: ["node_modules"]})
```

Ejemplo bower:
```js
sass({includePaths: ["bower_components"]})
```

#### Webpack

Importamos ed-grid en nuestro archivo **main.scss**
```scss
@import '~ed-grid/ed-grid';
```

Haremos uso de los siguientes loaders para poder importar archivos de sass directamente en javascript

* [style-loader](https://github.com/webpack/style-loader)
* [css-loader](https://github.com/webpack/css-loader)
* [sass-loader](https://github.com/jtangelder/sass-loader)
* [url-loader](https://github.com/webpack/url-loader)

Este ultimo loader es para poder cargar las fuentes

Ejemplo de configuracióne en **webpack.config.js**:

```js
module: {
  loaders: [
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }
  ]
}
```
