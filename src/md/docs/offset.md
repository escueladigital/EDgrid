# Offset (Sass/CSS)

Se conoce como offset al movimiento de un elemento respecto a la posición que se supone deberia tener. En ed-grid, offset no es más que un margin-left. La única ventaja de usar offsets con ed-grid es no escribir a mano las media queries.

## Uso con CSS (cssCore)
Basta añadir clases del formato bp-offset-n donde bp es un breakpoint válido de ed-grid (s,m,l,xl) y n un múltiplo de 5 o una fracción según lo indicado en el flujo de trabajo recomendado.

```markup
<div class="selector s-offset-2-3 m-offset-50 l-offset-10"></div>
```

## Uso con Sass
Incluya el mixin `offset($s,$m,$l$xl)` donde cada parámetro es el offset en cada breakpoint de ed-grid. No hay restricciones a múltiplos de 5, incluso puede pasar fracciones.

Tenga en cuenta que solo es obligatorio el primer parámetro.

```scss
.selector {
  @include offset(2/3,50,10);
}
```
Compila a:
```scss
.selector{
  margin-left:66.66667%;
}

@media screen and (min-width:40em){
  .selector{
    margin-left:50%;
  }
}

@media screen and (min-width:64em){
  .selector{
    margin-left:10%;
  }
}
```
