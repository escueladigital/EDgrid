# Grid (CSS/Sass)
El componente grid nos permite crear cuadriculas a través de un contenedor para la cuadricula y elementos (hijos directos de este contenedor) que serán los items de esta cuadricula.

Ejemplo de grid (cuadricula). Las cuadriculas no son solo de imágenes, puede usarlas con cualquier tipo de elemento.

## Uso con CSS (cssCore)
En CSS EDgrid cuenta con dos grids preconstruidos: `1,2,3,4` y `2,3,4,5` (los números representan las columnas en cada breakpoint de ed-grid).

Para utilizarlos, use la clase `grid-container` en el contedor, además la clase `grid-1234` o `grid-2345` para indicar el tipo de grid.

Por último, a cada item de la galeria asignele la clase `grid-item`

```markup
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

## Uso con Sass
Para Sass, use el mixin `grid($item,$s $m $l $xl,$gutter)` aplicado al contenedor del grid. Los parámetros son:

* `$item` (obligatorio) es el selector css de cada item del grid. Debe pasarse entrecomillado.
* `$s $m $l $xl` (solo el primero obligatorio) son el número de columnas en cada breakpoint de EDgrid (separados por espacios)
  - Los breakpoints superiores heredaran el número de columnas del último breakpoint declarado en el mixin
  - `$gutter` (opcional) es la separación entre los items. Solo se aceptan `em`, `rem` o `px`.

Ejemplo, para el siguiente HTML:

```markup
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

```markup
.gallery {
  @include grid('.image',1 1 2 3);
}
```

Que compilará a
```scss
.gallery{
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
      flex-wrap:wrap;
  margin-left:-.5em;
  margin-right:-.5em;
}

.gallery > .image{
  width:calc(100% - 1em);
  margin:.5em;
}

@media screen and (min-width:64em){
  .gallery > .image{
    width:calc(50% - 1em);
  }
}

@media screen and (min-width:90em){
  .gallery > .image{
    width:calc(33.33333% - 1em);
  }
}
```
