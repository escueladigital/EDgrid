# Videos responsive (Sass/CSS)
EDgrid le permite insertar videos responsive con la proporcion 16:9 en cualquier breakpoint.

El video siempre se expandirá al 100% del ancho de su contenedor.

## Uso con clases HTML

Añada la clase `ed-video` al contenedor de su video (que puede ser un `iframe` elemento `video` o cualquier elemento con la clase `.video`)

```html
<div class="ed-video">
  <iframe src="https://www.youtube.com/embed/cd549lZtPEU"></iframe>
</div>
```
<div class="ed-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/cd549lZtPEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
