# Sistema de filas y columnas con CSS Grid

La versión 3 de EDgrid incluye la creación de layouts con CSS Grid, la que ofrece varias ventajas sobre los layouts con Flexbox.

Esta versión se basa en las siguientes reglas:

1. El contenedor define la cantidad de columnas en cada breakpoint
2. Los items definen cuantas columnas de su contedor ocuparán
3. Solo el contenedor tiene una clase definida `ed-grid`. Los items pueden ser cualquier elemento hijo directo de `ed-grid` (a diferencia de la versión con flexbox que exigía tener un `ed-item`).
4. CSS Grid utiliza la propiedad `gap` para definir la separación entre tracks, lo que resuelve el problema de los contenedores anidados y los paddings (propio de layouts con floats y flexbox).

## Contenedor ed-grid

En esta versión se usa `ed-grid` como contenedor y es en él donde debemos definir las columnas (es así como funciona CSS Grid).

Para definir las columnas use la nomenclatura `breakpoint-grid-numero`.

```html
<div class="ed-grid s-grid-2 lg-grid-4 xl-grid-10">
  <!-- Este contenedor tiene 2 columnas en tamaño s, 4 columnas en tamaño lg y 10 columnas en tamaño xl -->
</div>
```

## Items

Cualquier hijo directo de `ed-grid` es automáticamente un item del layout. Y automáticamente tomará una columna de su contenedor.

```html
<!-- Layout de tres columnas donde cada card ocupa una columna.
No tiene que hacer nada en los items. Solo definir las columnas en el contenedor -->
<div class="ed-grid s-grid-3">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```
Ejemplo: 

<div class="ed-grid-demo">
<div class="ed-grid s-grid-3">
  <div class="article">1</div>
  <div class="article">2</div>
  <div class="article">3</div>
</div>
</div>

### Definir cantidad de columnas que ocupa el item

Use la siguiente nomenclatura `breakpoint-cols-numero` Donde número es la cantidad de columnas.

Por ejemplo, para crear un layout de sidebar al 25% y contenido al 75% el marcado sería el siguiente:

```html
<div class="ed-grid s-grid-4">
  <div>1</div>
  <div class="s-cols-3">2</div>
</div>
```

Ejemplo

<div class="ed-grid-demo">
<div class="ed-grid s-grid-4">
  <div>1</div>
  <div class="s-cols-3">2</div>
</div>
</div>

### Definir en qué columna inicia un item

Use la nomenclatura: `breakpoint-x-numero` para indicar en qué columna iniciará un item.

```html
<div class="ed-grid s-grid-4">
  <div class="s-cols-3 s-x-2">
  Comienzo en la columna 2 y ocupo 3 columnas
  </div>
</div>
```

Ejemplo:

<div class="ed-grid-demo">
<div class="ed-grid s-grid-4">
  <div class="s-cols-3 s-x-2">
  Comienzo en la columna 2 y ocupo 3 columnas
  </div>
</div>
</div>

### Definir cantidad de filas que ocupa el item

Use la siguiente nomenclatura `breakpoint-rows-numero` Donde número es la cantidad de filas.

```html
<div class="ed-grid rows-gap s-grid-2">
  <div class="s-rows-2">1</div>
  <div >2</div>
  <div>3</div>
</div>
```
Ejemplo:

<div class="ed-grid-demo">
<div class="ed-grid rows-gap s-grid-2">
  <div class="s-rows-2">1</div>
  <div>2</div>
  <div>3</div>
</div>
</div>

### Definir en qué fila inicia un item

Use la nomenclatura: `breakpoint-y-numero` para indicar en qué columna iniciará un item.

```html
<div class="ed-grid rows-gap s-grid-4">
  <div class="s-rows-2">1</div>
  <div class="">2</div>
  <div class="s-y-2 s-x-2 s-cols-2">3</div>
  <div>4</div>
  <div class="s-rows-2">5</div>
</div>
```

Ejemplo:

<div class="ed-grid-demo">
<div class="ed-grid rows-gap s-grid-4">
  <div class="s-rows-2">1</div>
  <div class="">2</div>
  <div class="s-y-2 s-x-2 s-cols-2">3</div>
  <div>4</div>
  <div class="s-rows-2">5</div>
</div>
</div>

## Anidar contenedores

Puesto que CSS Grid define la separación entre tracks internamente, puede anidar contenedores como desee, sin restricciones.

```html
<div class="ed-grid lg-grid-3">
    <div class="s-cols-2 ed-grid s-grid-3 rows-gap">
        <div class="s-cols-3">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </div>
    <div>5</div>
</div>
```
Ejemplo:

<div class="ed-grid-demo">
<div class="ed-grid s-grid-3">
    <div class="s-cols-2 ed-grid s-grid-3 rows-gap">
      <div class="s-cols-3">1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
    <div>5</div>
</div>
</div>

## Separación entre filas y columnas

De forma predeterminada las columnas tienen una separacion de `1rem` en tamaños móviles (s,m) y `2rem` en tamaños de escritorio (lg,xl). Si desea agregar una separación entre filas (igual a la de las columnas), agregue la clase `rows-gap` al contenedor.

```html
<div class="ed-grid rows-gap s-grid-2 m-grid-4 lg-grid-6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
```

Ejemplo:

<div class="ed-grid-demo">
<div class="ed-grid rows-gap s-grid-2 m-grid-4 lg-grid-6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
</div>

Puede cambiar la separación para todos los `ed-grid` redefiniendo la variable `$gap` antes de importar EDgrid.

```scss
$gap: 1rem; // En tamaños de escritorio se multiplica por 2
@import "~ed-grid/ed-grid";
```

O puede cambiar la separación para un `ed-grid` especifico usando la nomenclatura `breakpoint-gap-numero`. El número va de 0 a 4 con separaciones de `.5rem`.

\* *Puede usar el numero `05` para crear separaciones de `.25rem`. Ejemplo: `s-gap-05`.*

```html
<div class="ed-grid rows-gap s-gap-05 m-gap-1 s-grid-2 m-grid-4 lg-grid-6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="lg-cols-3">4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

<div class="ed-grid-demo">
<div class="ed-grid rows-gap s-gap-05 m-gap-1 s-grid-2 m-grid-4 lg-grid-6">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="lg-cols-3">4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
</div>
