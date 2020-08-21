# Sistema de columnas con flexbox
<!-- TOC -->

- [ed-container y ed-item](#ed-container-y-ed-item)
- [Ancho de los ed-container](#ancho-de-los-ed-container)
- [Ancho de los ed-item](#ancho-de-los-ed-item)
    - [1. Porcentajes](#1-porcentajes)
    - [2. Fracciones](#2-fracciones)
- [Anidar contenedores e items](#anidar-contenedores-e-items)
- [Avanzado: crea tus propios contenedores e items](#avanzado-crea-tus-propios-contenedores-e-items)
- [Avanzado: crear contenedores e items con Sass (sin clases HTML)](#avanzado-crear-contenedores-e-items-con-sass-sin-clases-html)

<!-- /TOC -->

--- 

EDgrid es una librería para construir layouts. Puede construirlos con Flexbox o [CSS Grid](/documentacion/layout-css-grid.html). 

<a id="markdown-ed-container-y-ed-item" name="ed-container-y-ed-item"></a>
## ed-container y ed-item

Para construir layouts con Flexbox y EDgrid debe definir contenedores con la clase `ed-container` e items con la clase `ed-item`. Con las siguientes reglas:

1. Un `ed-item` no puede ser huérfano. Siempre debe ser hijo de un `ed-container`
2. Un `ed-container` debe tener al menos un `ed-item` como hijo directo.
3. Los `ed-container` y `ed-item` son contenedores para crear layout. No agregue contenido directamente en ellos.


```html
<!-- Bien -->
<div class="ed-container">
    <div class="ed-item">
        <article>
            <p>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
                no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
                adarga antigua, rocín flaco y galgo corredor.
            </p>
        </article>
    </div>
</div>

<!-- Mal -->
<div class="ed-container">
    <article class="ed-item">
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
        no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
        adarga antigua, rocín flaco y galgo corredor.
    </article>
</div>
```

<a id="markdown-ancho-de-los-ed-container" name="ancho-de-los-ed-container"></a>
## Ancho de los ed-container

Los `ed-container` tienen un ancho predeterminado de 100% y un ancho máximo de `1200px`. Así cuando la pantalla es mayor a esta medida, el `ed-container` queda fijo y se centra horizontalmente.

Si desea un `ed-container` que mida siempre el 100% de la pantalla agregue la clase `full`.

```markup
<div class="ed-container full">
    <div class="ed-item"></div>
</div>
```

Si desea personalizar el ancho máximo del `ed-container` redefina la variable Sass `$max-width` antes de importar EDgrid.

```scss
$max-width: 1400px;
@import "~ed-grid/ed-grid";
```

<a id="markdown-ancho-de-los-ed-item" name="ancho-de-los-ed-item"></a>
## Ancho de los ed-item

Cada `ed-item` tiene 100% del ancho de su padre a menos que se especifique lo contrario (a través de clases). Las clases para definir el ancho son de dos tipos: porcentajes y fracciones.

<a id="markdown-1-porcentajes" name="1-porcentajes"></a>
### 1. Porcentajes

La nomenclatura de clase es `breakpoint-numero` Donde número es cualquier número múltiplo de 5 entre 0 y 100. Así que la clase `lg-75` significa que el elemento tendrá 75% del ancho de su padre a partir del breakpoint `lg`.

```html
<div class="ed-container">
    <div class="ed-container">
      <div class="ed-item s-30 lg-50">1</div>
      <div class="ed-item s-50 lg-25">2</div>
      <div class="ed-item s-20 lg-25">3</div>
    </div>
</div>
```

<div class="ed-grid-demo">
<div class="ed-container">
  <div class="ed-item s-30 lg-50">1</div>
  <div class="ed-item s-50 lg-25">2</div>
  <div class="ed-item s-20 lg-25">3</div>
</div>
</div>

* Como puede ver, las separaciones entre columnas se crean con paddings laterales.
* Si no desea separaciones con paddings (que dan problemas en layouts complejos) use nuestra versión con [CSS Grid](/documentacion/layout-css-grid.html)
* Si la suma de los anchos da más de 100, habrá saltos de fila. Así puede crear layouts más complejos sin crear nuevos contenedores.


<a id="markdown-2-fracciones" name="2-fracciones"></a>
### 2. Fracciones

Si quiere dividir el ancho entre 3 o 6 necesitará fracciones. La nomenclatura es `breakpoint-numerador-denominador`. Por ejemplo: `lg-1-3` significa un tercio de ancho (33.33%) a partir del breakpoint `lg` (1024px). Mientras que `xl-2-3` significa dos tercios a partir del breakpoint `xl` (1440px).

```html
<!-- Layout de tres columnas a partir de 1024px de pantalla -->
<div class="ed-container">
    <div class="ed-item s-1-3">1</div>
    <div class="ed-item s-1-3">2</div>
    <div class="ed-item s-1-3">3</div>
</div>
```

<div class="ed-grid-demo">
<div class="ed-container">
<div class="ed-item s-1-3">1</div>
<div class="ed-item s-1-3">2</div>
<div class="ed-item s-1-3">3</div>
</div>
</div>

<a id="markdown-anidar-contenedores-e-items" name="anidar-contenedores-e-items"></a>
## Anidar contenedores e items

Si necesita anidar elementos para crear layouts más complejos tenga en cuenta las siguientes reglas:

1. No cree un `ed-container` como hijo de un `ed-item`
2. Para anidar, agregue la clase `ed-container` a un `ed-item` entonces ya podrá crear nuevos `ed-item` nietos.

```html
<!-- Bien -->
<div class="ed-container">
    <div class="ed-item s-60">1</div>
    <div class="ed-item s-40 ed-container">
        <div class="ed-item s-50">2</div>
        <div class="ed-item s-50">3</div>
    </div>
</div>

<!-- Mal -->
<div class="ed-container">
    <div class="ed-item s-1-3"></div>
    <div class="ed-item s-2-3">
        <div class="ed-container">
            <div class="ed-item s-50"></div>
            <div class="ed-item s-50"></div>
        </div>
    </div>
</div>
```
<div class="ed-grid-demo">
<div class="ed-container">
    <div class="ed-item s-60">1</div>
    <div class="ed-item s-40 ed-container">
        <div class="ed-item s-50">2</div>
        <div class="ed-item s-50">3</div>
    </div>
</div>
</div>

<a id="markdown-avanzado-crea-tus-propios-contenedores-e-items" name="avanzado-crea-tus-propios-contenedores-e-items"></a>
## Avanzado: crea tus propios contenedores e items

Si no desea usar las clases `ed-container` y `ed-item` puede definir las suyas. Simplemente redefina las variables `$container` y `$item` antes de importar EDgrid.

```scss
$container: row;
$item: column;
@import "~ed-grid/ed-grid";
```

<a id="markdown-avanzado-crear-contenedores-e-items-con-sass-sin-clases-html" name="avanzado-crear-contenedores-e-items-con-sass-sin-clases-html"></a>
## Avanzado: crear contenedores e items con Sass (sin clases HTML)

Si no desea tocar el marcado HTML (o no tiene acceso a el por restricciones del proyecto) puede usar mixins de Sass para definir sus contenedores e items.

* Para los contenedores, use el mixin `ed-container`.
* Para los items, use el mixin `ed-item($s,$m,$lg,$xl)` Los parámetros definen el ancho en cada breakpoint:
* Puede omitirlos todos y el ancho será siempre 100%
* Un ancho declarado se herederá en los breakpoints superiores.
* Puede usar fracciones como parámetro. Por ejemplo: `1/3`

```scss
.main-page {
@include ed-container
}

.sidebar {
@include ed-item(100,100,1/3)
}

.content {
@include ed-item(100,100,2/3)
}
```
