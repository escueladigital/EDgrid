# Personalizar EDgrid con Sass

Una de las principales ventajas de EDgrid es que es altamente personalizable pues sus variables de configuración pueden ser sobreescritas. Para hacerlo, debe redefinirlas antes de importar EDgrid.

```scss
// 1. Personalice sus variables
$cssCore: false;
// 2. Importe EDgrid
@import "~ed-grid/ed-grid";
```

Tenga en cuenta que no siempre querrá personalizar EDgrid y le bastará con solo importar la librería.

## Variables que puede personalizar.

A continuación se muestran las variables que puede redefinir, con su valor por defecto y la explicación de su función.

```scss
// Helpers
$cssCore    : false; // Compila ayudas de css (no recomendado si trabaja con Sass).
$cssHelpers : true;  // Ayudas extras para el layout (recomendado siempre).
$buttons    : true;  // Imcluir botones de EDgrid. Cambiélo a false si va a usar sus propios botones.
$devMode    : false; // Modo debug. Cámbielo a true para ver ayudas al layout

// Selectores ed-container y ed-item.
$container : ed-container; 
$item : ed-item;

// Ancho máximo para los contenedores
$max-width : 1200px;

// Separación entre filas y columnas del layout
$gap: 2rem;

// Máximo número de columnas enn layouts con CSS Grid
$max-grid-columns : 20;

// Breakpoints
$breakpoints : (
  s : 0,
  m : 640px,
  l : 1024px,
  lg : 1024px,
  xl : 1440px
);

// Fracciones para calcular anchos de los items
$fractions : 3 6;
```
