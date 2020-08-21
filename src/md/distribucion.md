# Distribución
<!-- TOC -->

- [Order](#order)
- [Alineación en vertical y horizontal de elementos hijos](#alineaci%C3%B3n-en-vertical-y-horizontal-de-elementos-hijos)
- [Orientación](#orientaci%C3%B3n)

<!-- /TOC -->

---


<a id="markdown-order" name="order"></a>
## Order

Tanto en flexbox como en grid, la propiedad `order` permite definir la posición de un elemento en el layout. Por ejemplo, un elemento con `order: 1` aparecerá antes que uno con `order:2` aunque en el código HTML se encuentre después.

Con EDgrid puede definir esta propiedad con las clases `breakpoint-order-numero`. Donde número va de `1` hasta la variable `max-grid-columns` (12 por defecto).

Tenga en cuenta que asignarle `1` al order de un elemento no hará que aparezca en primer lugar ya que el valor predeterminado de todos es `0` (teoría de CSS). Por lo que debe agregarle las clases a todos los que quiera modificar.

```html
<div class="ed-grid s-grid-3">
    <div class="m-order-2 lg-order-3">1</div>
    <div class="m-order-3 lg-order-1">2</div>
    <div class="m-order-1 lg-order-2">3</div>
</div>
```

<div class="ed-grid-demo">
<div class="ed-grid s-grid-3">
    <div class="m-order-2 lg-order-3">1</div>
    <div class="m-order-3 lg-order-1">2</div>
    <div class="m-order-1 lg-order-2">3</div>
</div>
</div>


<a id="markdown-alineación-en-vertical-y-horizontal-de-elementos-hijos" name="alineación-en-vertical-y-horizontal-de-elementos-hijos"></a>
## Alineación en vertical y horizontal de elementos hijos

Usando la teoría de flexbox, consideramos `main` como eje horizontal y `cross` como eje vertical. Con las clases `breakpoint-main-[start|center|end|justify|distribute]` y `breakpoint-cross-[start|center|end|baseline]` Puede alinear bloques y elementos hijos.

```html
<div class="s-cross-center">
    <img src="/img/tioalexys.jpg" width="80" class="s-mr-2">
    <span>Alexys Lozada</span>
</div>
```

<div class="ed-grid-demo s-pxy-1 s-cross-center">
    <img src="/assets/img/alexys.jpg" width="80" class="s-mr-2">
    <span>Alexys Lozada</span>
</div>

Tenga en cuenta que los márgenes de los elementos pueden influir en estas alineaciones. Por ejemplo, el mismo código anterior pero con un párrafo en lugar de span (el párrafo tienen un margin-bottom que impide el centrado vertical).

```html
<div class="s-cross-center">
    <img src="/img/tioalexys.jpg" width="80" class="s-mr-2">
    <p>Alexys Lozada</p>
</div>
```

<div class="ed-grid-demo s-pxy-1 s-cross-center">
    <img src="/assets/img/alexys.jpg" width="80" class="s-mr-2">
    <p>Alexys Lozada</p>
</div>

Lo resolvemos cambiando la etiqueta o anulando el margen.

```html
<div class="s-cross-center">
    <img src="/img/tioalexys.jpg" width="80" class="s-mr-2">
    <p class="s-mb-0">Alexys Lozada</p>
</div>
```

<div class="ed-grid-demo s-pxy-1 s-cross-center">
    <img src="/assets/img/alexys.jpg" width="80" class="s-mr-2">
    <p class="s-mb-0">Alexys Lozada</p>
</div>


<a id="markdown-orientación" name="orientación"></a>
## Orientación

Use las siguientes clases para definir la orientacion de los hijos de un elemento:

* `breakpoint-row` De izquierda a derecha (predeterminado)
* `breakpoint-column` De arriba hacia abajo
* `breakpoint-row-reverse` De derecha a izquierda
* `breakpoint-column-reverse` De abajo hacia arriba

```html
<div class="lg-50 lg-to-center column">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

<div class="ed-grid-demo">
<div class="lg-50 lg-to-center s-bg-blue column">
    <div class="box-demo">1</div>
    <div class="box-demo">2</div>
    <div class="box-demo">3</div>
</div>
</div>
