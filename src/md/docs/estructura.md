# Estructura
La siguiente es la estructura de archivos de ed-grid. Solo se explican los archivos y directorios propios del proyecto y no las herramientas comunes de desarrollo (package.json, .gitignore, etc)
* **components** / Carpeta con componentes de ed-grid
  - **​​_base.scss** Estilos base para rwd
  - **_buttons.scss** Mixin para botones
  - **_core.scss** Core de ed-grid con los containers, items y el grid base
  - **_css-core.scss** Mixins Sass incluidos para ser compilados a css (si usará la versión css)
  - **_css-hepers.scss** Ayudas al trabajo
  - **_dev.scss** Mixins para el modo dev (desarrollo en versiones previas)
  - **_ed-medu.scss** Mixins para crear menús rwd
  - **_flexbox.scss** Mixins para trabajar con flexbox
  - **_functions.scss** Funciones para transformar pixeles a em y rem
  - **_grid.scss** Mixins para crear grids (cuadriculas) rwd
  - **_helpers.scss** Mixins de ayuda para maquetación
  - **_media-queries.scss** Mixins para trabajar fácilmente con media queries
  - **_offset.scss** Mixins para crear offsets a los items
  - **_video.scss** Mixin para videos rwd
  - **_visibility.scss** Mixins para controlar la visibilidad de elementos según el breakpoint
* **css** / Carpeta con la versión css de ed-grid
  - **​​ed-grid.css** Version css de ed-grid (si va a trabajar sin Sass)
  - **ed-grid.min.css** Versión css de ed-grid minificada
* **js** /
  - **babel** /
    - index.js
    - menu.js
    - migrate.js
    - util.js
  - ed-grid.js Scripts compilados para importar en su proyecto (incluye menu y migrate)
- **test** / Carpeta para testear ed-grid
  - **​​index.html**
  - **style.css**
  - **style.scss** Archivo desde el que se importa ed-grid y compila a styles.css
- .babelrc
- .editorconfig
- .gitattributes
- .gitignore
- .npmignore
-  README.md
-  ed-grid.scss Archivo principal de ed-grid, es el que debe ser importado en su proyecto
- gulpfile.babel.js
- package.json
