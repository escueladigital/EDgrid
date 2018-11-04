# Modo dev
El modo dev (modo desarrollo en versiones anteriores) es una característica exclusiva de ed-grid (no existente en otros frameworks) que nos permite saber el breakpoint actual y los componentes del layout (ed-container y ed-item).

Al activarlo el navegador muestra el layout de la siguiente manera:

En la parte superior en una franja azul se muestra el breakpoint actual y la leyenda de colores para el `ed-container` y los `ed-item`

El layout de la página es coloreado de la siguiente manera:

* Los ed-container tienen un borde rojo y en la parte superior una franja roja que imprime sus clases html.
* Los ed-items están coloreados de azul y amarillo
  - Las franjas azules muestran el ancho total de cada ed-item además de sus clases
  - La parte amarilla muestra el área disponible para contenido en el ed-item (recuerde que usan padding laterales para crear las separaciones entre ellos).

## Uso en CSS (cssCore)
Basta con añadirle la clase dev al elemento body
```markup
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ed-grid test page</title>
  <link rel="stylesheet" href="ed-grid.css">
</head>
<body class="dev">
```

## Activar el modo dev en Sass
Redefinir la variable `$devMode` a `true` antes de importar `ed-grid`
```scss
$devMode: true;
@import 'path/ed-grid/ed-grid';
```
