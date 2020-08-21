# Estructura de archivos

<!-- TOC -->

- [Etructura general del repositotio](#etructura-general-del-repositotio)
- [Archivos exclusivos de EDgrid](#archivos-exclusivos-de-edgrid)
- [Archivos exclusivos de la página de documentación](#archivos-exclusivos-de-la-p%C3%A1gina-de-documentaci%C3%B3n)

<!-- /TOC -->

---

La siguiente es la estructura de archivos de **EDgrid**. Solo se explican los archivos y directorios propios del proyecto y no las herramientas comunes de desarrollo (package.json, .gitignore, etc)

Tenga presente que en el mismo repositorio se encuentra la librería **EDgrid** y la página web con la documentación. Si desea estudiar como se creó EDgrid busque el archivo `src/scss/ed-grid.scss` y la carpeta `src/scss/ed-grid`. Todo lo demás se usa para construir esta página web y no forma parte de la librería.

<a id="markdown-etructura-general-del-repositotio" name="etructura-general-del-repositotio"></a>
## Etructura general del repositotio

* `src/` Carpeta de desarrollo
    * `md/` Contenido de la documentación en markdown
    * `data/` Datos JSON para la página web
    * `img/` Imágenes para la página web
    * `js/` JavaScript para la página web
    * `pug/` Archivos pug para generar la página web
    * `scss/` Estructura de archivos Sass
    * `ed-grid/` **🔥 Componentes de la librería EDgrid.**
    * `web-styles/` Estilos para la documentación en ed-grid.com (no son parte de EDgrid)
    * `styles.scss` Archivo principal para la documentacion ed-grid.com (no es parte de EDgrid)
    * `ed-grid.scss` **🔥 Archivo principal de EDgrid que importa sus componentes y define variables.**
* `ed-grid.scss` **🔥 Archivo para importar EDgrid desde node_modules**.
* `test.html` **🔥 Archivo para hacer pruebas con EDgrid**

<a id="markdown-archivos-exclusivos-de-edgrid" name="archivos-exclusivos-de-edgrid"></a>
## Archivos exclusivos de EDgrid

* `ed-grid.scss` **🔥 Archivo para importar EDgrid desde node_modules**.
* `src/`
    * `ed-grid.scss` **🔥 Archivo que importa los componentes y define las variables de configuración**
    * `ed-grid-css.scss` **Archivo para compilar EDgrid a su versión CSS**
    * `ed-grid/`
        * `components/` Componententes principales de la librería
            * `_alignment.scss` Utilidades para alineación de bloques y contenido
            * `_base` Estilos base para elementos HTML.
            * `_core-flexbox.scss` Sistema de columnas con flexbox
            * `_core-grid.scss` Sistema de filas y columnas con CSS Grid
            * `_dev.scss` Estilos para debuggin
            * `_layouts.scss` Estilos para separaciones verticales, margenes y paddings.
            * `_media-queries` Mixins para crear media queries
            * `_prototype.scss` Estilos para prototipado rápido
            * `_video.scss` Estilos para video responsive
            * `_visibility.scss` Estilos para mostrar y ocultar elementos en cada breakpoint
        * `helpers/` Funciones y mixins necesarios para el funcionamiento de diversos componentes
            * `_functions.scss` Funciones para convertir pixeles a em y rem (necesarios para mixins de EDgrid)
            * `_mixins.scss` Mixins de apoyo en el desarrollo de componentes
        * `legacy/` Componentes y estilos para compatibilidad con versiones anteriores de EDgrid (no necesario en proyectos nuevos).
            * `_ed-menu` Estilos para crear menus de navegación
            * `_grid.scss` Estilos para crear cuadriculas (se recomienda usar core-grid)
            * `_legacy.scss` Estilos varios de versiones antiguas
            * `_offset` Estilos legacy para offset de columnas (no necesario en proyectos nuevos).
    * `css/`
        * `ed-grid.css` Versión CSS de EDgrid con comentarios para desarrollo
        * `ed-grid.min.css` Versión minificada de EDgrid

<a id="markdown-archivos-exclusivos-de-la-página-de-documentación" name="archivos-exclusivos-de-la-página-de-documentación"></a>
## Archivos exclusivos de la página de documentación

* `docs/` Página web de documentación y assets compilados
* `src/`
    * `pug/` Archivos pug para generar páginas HTML
    * `md/` Contenido de la documentación en formato markdown
    * `img/` Imágenes de la página web
    * `data/` Datos en formato JSON para mostrar en la página web
    * `js/` Archivos javascript para la documentación
    * `scss/`
        * `styles.scss` Importa archivos para estilos de la documentación
        * `web-styles/` Partials de Sass para la documentación
