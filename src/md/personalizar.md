# Personalizar EDgrid con Sass

EDgrid es altamente personalizable pues sus variables de configuración pueden ser sobreescritas. Para hacerlo, debe redefinirlas antes de importar EDgrid.

```scss
// 1. Personalice sus variables
$prototype: false;
$dev: true;
// 2. Importe EDgrid
@import "~ed-grid/ed-grid";
```

Tenga en cuenta que no siempre querrá personalizar EDgrid y le bastará con solo importar la librería.

## Variables que puede personalizar.

A continuación se muestran las variables que puede redefinir, con su valor por defecto y la explicación de su función.

```scss
// Breakpoints
$breakpoints : (
  s  : 0,
  m  : 640px,
  lg : 1024px,
  xl : 1440px
);

$prototype        : true;         // Activa los estilos de prototipado
$dev              : false;        // Activa los estilos para debuggin
$dev-hover        : false;        // Estilos de debuggi sólo en hover
$max-width        : 1200px;       // Ancho máximo de los contenedores ed-container y ed-grid
$l-unit           : .5rem;        // Unidad básica de layout (para separaciones verticales, margin y padding)
$gap              : $l-unit * 4;  // Separación entre columnas (2rem)
$fractions        : 3 6;          // Fracciones para crear columnas (core flexbox)
$container        : ed-container; // Clase para el contenedor (core flexbox)
$item             : ed-item;      // Clase para los items (core flexbox)
$grid-container   : ed-grid;      // Clase para el contenedor (core grid)
$max-grid-columns : 12;           // Máximo número de columnas (core css grid)
$legacy           : false;        // Soporte para versiones antiguas

// CSS Variables
:root {
  // Variables para prototipar
  --color                  : #007BDF;          // Color base (azul EDteam)
  --color-alt              : #006DC6;          // Color alterno (azul EDteam alterno)
  --border-color           : #DFE0E0;          // Color para bordes (gris suave)
  --light-bg               : #F0F0F0;          // Color gris para fondos
  --border-radius          : #{$l-unit * 0.5}; // .25rem
  // layout
  --vertical-block-space   : #{$l-unit * 2};   // 1rem
  --vertical-content-space : #{$l-unit * 2};   // 1rem
  --gap                    : #{$l-unit * 2};   // 1rem
  --max-width              : #{$max-width};

  @include from(lg) {
    --vertical-block-space : #{$l-unit * 4};
    --gap                  : #{$l-unit * 4};    // 2rem
  }
}
```
