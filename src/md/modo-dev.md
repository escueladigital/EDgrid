# Modo dev

El modo dev es una característica de EDgrid que nos permite saber el breakpoint actual y los componentes del layout (ed-grid, ed-container y ed-item).

Al activarlo el navegador muestra el layout de la siguiente manera:

1. Los `ed-container` y `ed-grid` tienen un borde rojo y en la parte superior una franja roja que imprime sus clases html.
2. Los `ed-item` e hijos directos de `ed-grid` se colorean de azul y a su vez imprimen sus clases html en una franja azul.

<h4 class="s-mb-1">Modo dev en Flexbox</h4>
<div class="l-block">
    <div class="dev-demo">
        <div class="ed-container ed-grid-demo">
          <div class="ed-item s-30 lg-50">1</div>
          <div class="ed-item s-50 lg-25">2</div>
          <div class="ed-item s-20 lg-25">3</div>
        </div>
    </div>
</div>

<h4 class="s-mb-1">Modo dev en Grid</h4>
<div class="l-block">
 <div class="ed-grid-demo dev-demo">
     <div class="ed-grid s-grid-4">
       <div class="s-cols-2">1</div>
       <div class="s-cols-1">2</div>
       <div class="s-cols-1">3</div>
     </div>
 </div>
</div>

## Activar modo dev con clases HTML

Basta con añadirle la clase `dev` al elemento body

```html
<body class="dev"></body>
```

## Activar el modo dev en Sass

Redefinir la variable `$dev` a `true` antes de importar `ed-grid`

```scss
$dev: true;
@import 'path/ed-grid/ed-grid';
```

## Modo dev hover

Si sólo quieres inspeccionar un elemento a la vez y no toda la página, puedes usar el modo desarrollo con hover, donde sólo funcionará con `ed-grid`, `ed-container` y `ed-item` que tengan el estado de hover.

<h4 class="s-mb-1">Modo dev con hover</h4>
<div class="l-section">
 <div class="ed-grid-demo dev-demo-hover">
     <div class="ed-grid s-grid-4">
       <div class="s-cols-2">1</div>
       <div class="s-cols-1">2</div>
       <div class="s-cols-1">3</div>
     </div>
 </div>
</div>

<h4 class="s-mb-1">Activar modo dev hover con clases HTML</h4>

Basta con añadirle la clase `dev-hover` al elemento body

```html
<body class="dev-hover"></body>
```

<h4 class="s-mb-1">Activar modo dev hover en Sass</h4>

Redefinir la variable `$dev-hover` a `true` antes de importar `ed-grid` (no es necesario redifinir también la variable `$dev`).

```scss
$dev-hover: true;
@import 'path/ed-grid/ed-grid';
```
