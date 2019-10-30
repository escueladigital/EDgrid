# EDboilerplate

Es una sencilla estructura para un proyecto web estático basado en [Gatsby](https://www.gatsbyjs.org/).

## Características de EDboilerplate:
* Usa [Gatsby](https://www.gatsbyjs.org/) para generar sitios estáticos usando React.
* Compila Sass.
* Tiene una estructura lista de estilos (con Sass) basada en SMACSS y ITCSS.
* Tiene una estructura de componentes en React basada en atomic design.
* Tiene una configuración lista para que el sitio sea una progressive web application, para que sea instalable en dispositivos moviles y trabaje offline (Solo funciona despues de hacer el build).

## Modo de uso
Para usar el boilerplate es necesario tener instalado [node.js](https://nodejs.org/en/download/).

1. Instalar Gatsby CLI usando:
   ```bash
    npm install -g gatsby-cli
   ```
   Si ya esta instalado, pasar al siguiente paso.
2. Ejecute en terminal.
   ```bash
    gatsby new application-name https://github.com/alejogs4/boilerplate-sass-offline-atomicdesign
   ```
3. Ejecute en terminal.
   ```bash
    cd application-name
   ```
4. Ejecute en terminal
   ```bash
    gatsby develop
   ```
   para levantar el servidor de desarrollo.
5. Ejecute en terminal
   ```bash
    gatsby build
   ```
   para generar sus archivos para producción.

## Estructura

1. La carpeta **src** contiene la estructura de archivos con la que trabajará.
2. La carpeta **public** contiene los archivos compilados que deberán llevarse a producción.
3. Sass se encuentra en `/src/scss`.
4. Dentro de `/src/pages` se encuentran todas las paginas que habrá en el sitio.
5. Dentro de **favicons** se encuentran los iconos para la pwa.

## Configuración de la pwa
Para adaptar la configuración de la pwa a sus necesidades, en el archivo `gatsby-config.js`, personaliza los datos del manifest.json, en el objeto `options`.
```json
  {
      "resolve": "gatsby-plugin-manifest",
      "options": {
        "name": "EDteam",
        "short_name": "EDteam",
        "start_url": "/",
        "background_color": "#007BDF",
        "theme_color": "#FAFDFF",
        "display": "standalone",
        "icons": [
          {
            "src": "/favicons/edteam-512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "/favicons/edteam-96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/favicons/edteam-128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/favicons/edteam-256.png",
            "sizes": "256x256",
            "type": "image/png"
          }
        ]
      },
    }
```
Los iconos deben estar en los tamaños especificados para que se adapte a los diferentes tamaños de pantalla.