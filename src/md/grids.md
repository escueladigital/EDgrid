# Grids (cuadrículas)

Con EDgrid puede crear cuadrículas fácilmente.


## Grids con CSS
En CSS EDgrid cuenta con dos grids preconstruidos: `1,2,3,4` y `2,3,4,5` (los números representan las columnas en cada breakpoint de ed-grid).

Para utilizarlos, use la clase `grid-container` en el contedor, además la clase `grid-1234` o `grid-2345` para indicar el tipo de grid.

Por último, a cada item de la galeria asignele la clase `grid-item`

```html
<div class="grid-container grid-1234">
  <div class="grid-item"><!-- Cualquier contenido--></div>
  <div class="grid-item"><!-- Cualquier contenido--></div>
  <div class="grid-item"><!-- Cualquier contenido--></div>
  <div class="grid-item"><!-- Cualquier contenido--></div>
  <div class="grid-item"><!-- Cualquier contenido--></div>
  <div class="grid-item"><!-- Cualquier contenido--></div>
  <div class="grid-item"><!-- Cualquier contenido--></div>
</div>
```

## Grids con Sass
Para Sass, use el mixin `grid($item,$s $m $l $xl,$gutter)` aplicado al contenedor del grid. Los parámetros son:

* `$item` (obligatorio) es el selector css de cada item del grid. Debe pasarse entrecomillado.
* `$s $m $l $xl` (solo el primero obligatorio) son el número de columnas en cada breakpoint de EDgrid (separados por espacios)
  * Los breakpoints superiores heredaran el número de columnas del último breakpoint declarado en el mixin
  * `$gutter` (opcional) es la separación entre los items. Solo se aceptan `em`, `rem` o `px`.

Ejemplo, para el siguiente HTML:

```html
<div class="gallery">
  <div class="image"><!-- Una foto en la galeria--></div>
  <div class="image"><!-- Una foto en la galeria--></div>
  <div class="image"><!-- Una foto en la galeria--></div>
  <div class="image"><!-- Una foto en la galeria--></div>
  <div class="image"><!-- Una foto en la galeria--></div>
  <div class="image"><!-- Una foto en la galeria--></div>
  <div class="image"><!-- Una foto en la galeria--></div>
</div>
```

Crearemos un grid 1,1,2,3

```scss
.gallery {
  @include grid('.image',1 1 2 3);
}
```

Los grids son creados con CSS Grid y agregan un fallback con flexbox para navegadores que no lo soportem.
