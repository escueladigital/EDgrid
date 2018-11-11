# Layout con CSS Grid (beta)

La versión 3 de EDgrid (aun en desarrollo) incluye la creación de layouts con CSS Grid, la que ofrece varias ventajas sobre los layouts con Flexbox. Ests sitio web y los demás proyectos de EDteam usan esta versión para probarla en producción y corregir errores. Si detecta alguno por favor repórtelo a [Github](https://github.com/escueladigital/EDgrid/issues)

Esta versión se basa en las siguientes reglas:

1. El contenedor define la cantidad de columnas en cada breakpoint
2. Los items definen cuantas columnas de su contedor ocuparám
3. Solo el contenedor tiene una clase definida `ed-grid`. Los items pueden ser cualquier elemento hijo directo de `ed-grid` (a diferencia de la versión con flexbox que exigía tener un `ed-item`).
4. CSS Grid utiliza la propiedad `grid-gap` para definir la separación entre tracks, lo que resuelve el problema de los contenedores anidados y los paddings (propio de layouts con floats y flexbox).

## Contenedor ed-grid

En esta versión se usa `ed-grid` como contenedor y es en él donde debemos definir las columnas (es así como funciona CSS Grid).

Para definir las columnas use la nomenclatura `breakpoint-cols-numero`.

```html
<div class="ed-grid s-cols-2 lg-cols-4 xl-cols-10">
  <!-- Este contenedor tiene 2 columnas en tamaño s, 4 columnas en tamaño lg y 10 columnas en tamaño xl -->
</div>
```

## Items

Cualquier hijo directo de `ed-grid` es automáticamente un item del layout. Y automáticamente tomará una columna de su contenedor. Así que si necesita que cada item ocupe una columna, solo tiene que definir las columnas en el contenedor y no hacer nada en los items.

```html
<!-- Layout de tres columnas donde cada card ocupa una columna.
No tiene que hacer nada en los items. Solo definir las columnas en el contenedor -->
<div class="ed-grid m-cols-3">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
```

### Definir cantidad de columnas que ocupa el item

Use la siguiente nomenclatura `breakpoint-span-numero` Donde número es la cantidad de columnas.

Por ejemplo, para crear un layout de sidebar al 25% y contenido al 75% el marcado sería el siguiente:

```html
<div class="ed-grid lg-cols-4">
  <aside></aside>
  <main class="lg-span-3"></main>
</div>
```

### Definir en qué columna inicia un item

Use la nomenclatura: `breakpoint-start-numero` para indicar en qué columna iniciará un item.

```html
<div class="ed-grid lg-cols-4">
  <main class="lg-span-3 lg-start-2">
  <!-- Este elemento inicia en la columna 2 en breakpoint lg -->
  </main>
</div>
```

## Anidar contenedores

Puesto que CSS Grid define la separación entre tracks internamente, puede anidar contenedores como desee, sin restricciones.

```html
<div class="ed-grid lg-cols-2">
  <div class="card">
    <div class="ed-grid lg-cols-3"></div>
  </div>
</div>
<div class="ed-grid lg-cols-2">
</div>
</div>
```

## Separación entre filas y columnas

De forma predeterminada las columnas tienen una separacion de `2rem`. Si desea agregar una separación entre filas, agregue la clase `rows-gap` al contenedor.

```html
<div class="ed-grid rows-gap">
</div>
```

Puede cambiar la separación redefiniendo la variable `$gap` antes de importar EDgrid.

```scss
$gap: 1rem;
@import "~ed-grid/ed-grid";
```
