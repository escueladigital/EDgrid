# Configurar (Sass)
Si va a trabajar con Sass lo primero es importarlo en su proyecto.
```scss
@import "path/ed-grid/ed-grid"
```


Sin embargo, ed-grid posee un archivo config.scss que define las variables y que pueden sobreescribirse (antes de la importación). Recomendamos fijarse en estas tres variables
```scss
// Valores en config.scss
// Definalos en true o false (sin escribir !default) antes de importar ed-grid
$cssCore    : true !default;  // compila para quienes usen la version CSS
$cssHelpers : true !default;  // ayudas (se recomienda aun si trabaja con Sass)
$devMode    : false !default; // modo dev (declarar en true para activarlo)
```


Así que el modo recomendado de importar ed-grid es el siguiente:
```scss
// Valores en config.scss
// Definalos en true o false (sin escribir !default) antes de importar ed-grid
$cssCore    : false;  // como trabajaré en Sass no quiero que compile tooodo el CSS
$cssHelpers : true;  // recomendamos activar las ayudas
$devMode    : false; // cuando quiera activar el modo dev, basta poner esta variable en true
@import "path/ed-grid/ed-grid" // Importamos ed-grid luego de redefinir las variables
```


Otras variables en config que podría redefinir (solo para usuarios avanzados) son:
```scss
// flex-container and flex-item
$container : ed-container;
$item      : ed-item;

// Max width of containers
$max-width : rem(1200px);

// Gutter between same line items
// Total gutter between items is $gutter * 2
$gutter : em(15px);

// Breakpoints
$breakpoints : (
  s  : em(320px),
  m  : em(640px),
  l  : em(1024px),
  xl : em(1440px)
);

// Fracciones
$fractions: 3 6 8;
```

