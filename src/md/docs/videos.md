# Videos responsive (Sass/CSS)
EDgrid le permite insertar videos responsive con la proporcion 16:9 en cualquier breakpoint.

El video siempre se expandirá al 100% del ancho de su contenedor.

## Uso con CSS (cssHelpers)
Añada la clase `ed-video` al contenedor de su video (que puede ser un `iframe` elemento `video` o cualquier elemento con la clase `.video`)
```markup
<div class="ed-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/twKLcUXAl1c" frameborder="0" allowfullscreen></iframe>
</div>
```

## Uso con Sass
Use el mixin `edVideo($selector)` donde el parámetro `$selector` es opcional e indica un selector personalizado para el video. Si lo omite, funcionará igual que con CSS, aplicando la proporcion a un `iframe` elemento `video` o cualquier elemento con la clase `.video` hijos directos del selector al que se le pasa el mixin.

Este enfoque es muy útil cuando no quiere añadir clases extra a su html.

```scss
.media-container {
  @include edVideo;
}
```
