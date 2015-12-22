## ED-GRID

ED GRID  es un FRAMEWORK SOLO CSS para crear diseños web responsive y mobile first.

Documentación oficial: http://escueladigital.pe/ed-grid

Autor: Álvaro Felipe de Escuela Digital http://escueladigital.pe

Colaborador: Daniel Guillermo Romero http://adsiar.com


Este repositorio incluye las siguientes carpetas:

* **css** - contiene ed-grid.css (copie este archivo en su proyecto para usar ed-grid en su versión css)
* **ed-grid** - contiene ed-grid en su version sass. Puede copiar esta carpeta en sus proyectos para incluir edgrid con sass.
* **scss** - contiene archivos adicionales sass para poder comenzar con su proyecto

### ED-GRID + Gulp.js
Los cambios de la versión 1.2.1 de ED-GRID corresponden al trabajo con Gulp.js.

Gulp.js es un sistema de construcción que permite automatizar tareas comunes de desarrollo, tales como la minificación de código JavaScript, recarga del navegador, compresión de imágenes, validación de sintaxis de código y un sin fin de tareas más.

Para usar ED-GRID con Gulp.js se requiere tener instalado Node.js, el sitio oficial es https://nodejs.org, se recomienda la versión 5.

Adicionalmente, para usar los comandos descritos más adelante tal cual, se debe tener Gulp instalado de manera global, puedes verificar si lo tienes ejecutando el siguiente comando:

```
gulp --version
```

Si ya lo tienes, la terminal te arroja algo similar a esto:

```
14:48:22] CLI version 3.9.0
[14:48:22] Local version 3.9.0
```

En caso de que no tengas Gulp instalado globalmente en tu sistema, ejecuta:

```
npm install -g gulp
```

Para Linux o Mac OS X se debe anteponer `sudo` así:

```
sudo npm install -g gulp
```

Ahora que tienes Gulp instalado globalmente en tu sistema, ejecuta el siguiente comando en la carpeta raíz del proyecto, de esa forma se descargan las dependencias de ED-GRID necesarias para trabajar con Gulp:

```
npm install
```

### Tareas Gulp disponibles

A continuación se enumeran los comandos de Gulp disponibles para el trabajo con ED-GRID, ten en cuenta que debes estar ubicado en la carpeta raíz del proyecto para ejecutarlos.

```
gulp sass
```

Compila los archivos sass hijos directos de la carpeta `scss/` y agrega los prefijos propietarios de los navegadores, los archivos CSS generados se guardan en la carpeta `css/`.

```
gulp jade
```

Compila los archivos jade hijos directos de la carpeta `jade/`. Los archivos HTML generados se guardan en la carpeta raíz del proyecto.

```
gulp browser-sync
```

Crea un servidor local para el proyecto, se recomienda usarlo en conjunto con las tareas watch. Se puede indicar un puerto personalizado para el servidor anteponiendo `PORT=3000`, donde `3000` puede ser cualquier puerto disponible, el valor por defecto es `7070`. Ejemplo:

```
PORT=4444 gulp browser-sync
```

La dirección del servidor será `http://localhost:4444`.

```
gulp watch:sass
```

Ejecuta la tarea `sass` y queda escuchando los cambios de todos los archivos Sass de la carpeta `scss/` y subcarpetas.

```
gulp watch:jade
```

Ejecuta la tarea `jade` y queda escuchando los cambios de todos los archivos jade de la carpeta `jade/` y subcarpetas.

```
gulp browser-sync watch:html
```
Ejecuta las tareas `browser-sync` y `watch:html`, queda escuchando los cambios de todos los archivos HTML de la carpeta raíz del proyecto. **Recomendado para quienes no usen Jade**.

```
gulp browser-sync watch:js
```

Ejecuta las tareas `browser-sync` y `js`, queda escuchando los cambios de todos los archivos Javascript ubicados en la carpeta `js/`.

```
gulp watch:html-sass
```

Ejecuta las tareas `watch:html` y `watch:sass`. **Recomendado para quienes no usen Jade**.

```
gulp watch:all
```

Ejecuta las tareas `browser-sync`, `watch:sass`, `watch:jade` y `watch:js`.

```
gulp
```

Ejecuta la tarea `watch:sass`.

### Combinando tareas

Las tareas se pueden combinar unas con otras según convenga, por ejemplo, si quisiéramos recargar sólo el CSS en el navegador cada vez que hagamos un cambio en los archivos Sass, podemos ejecutar:

```
gulp browser-sync watch:sass
```

Cuando una o varias tareas watch se combinan con la tarea `browser-sync` el navegador recarga los archivos que correspondan automáticamente.

La combinación ideal para quienes no usan Jade es esta:

```
gulp browser-sync watch:html-sass watch:js
```

Escucha los cambios de los archivos HTML, Sass y Javascript, y los recarga automáticamente en el navegador. Es el equivalente a `gulp watch:all` para quienes sí usan Jade.
