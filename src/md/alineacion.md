# Alineación
<!-- TOC -->
- [Alineación de contenido](#alineación-de-contenido)
- [Alineación de bloques](#alineación-de-bloques)
- [Ancho de los bloques](#ancho-de-los-bloques)
- [Diferencia entre bloque  y contenido](#diferencia-entre-bloque--y-contenido)
- [Alineación de imágenes y elementos inline](#alineación-de-imágenes-y-elementos-inline)
- [Sobre el ancho de las imágenes](#sobre-el-ancho-de-las-imágenes)
<!-- /TOC -->

--- 

Con EDgrid puede alinear elementos o su contenido en horizontal y vertical según el breakpoint.

<a id="markdown-alineación-de-contenido" name="alineación-de-contenido"></a>
## Alineación de contenido

Use las clases `breakpoint-left`, `breakpoint-center` y `breakpoint-right`

```html
<h1 class="s-left m-center lg-right">Hola mundo</div>
<h1 class="s-center m-right lg-left">Hola mundo</div>
<h1 class="s-right m-left lg-center">Hola mundo</div>
```

Redimensione la ventana para ver
<div class="ed-grid-demo s-pxy-1">
<div class="t1 s-left m-center lg-right">Hola mundo</div>
<div class="t1 s-center m-right lg-left">Hola mundo</div>
<div class="t1 s-right m-left lg-center">Hola mundo</div>
</div>


<a id="markdown-alineación-de-bloques" name="alineación-de-bloques"></a>
## Alineación de bloques

Use las clases `breakpoint-to-left`, `breakpoint-to-center`, `breakpoint-to-right`

```html
<p class="s-75 m-50 lg-40 s-to-left m-to-center l-to-right">
    EDgrid es una libreria construida con Sass (y con versión CSS) 
    para Responsive Web Design (RWD). Es muy ligero, personalizable 
    y te permite prototipar y crear layouts en muy poco tiempo sin 
    conflictos con tu proyecto.
</p>
```
Ejemplo: 

<p class="s-bg-grey s-pxy-1 s-75 m-50 lg-40 s-to-left m-to-center l-to-right">EDgrid es una libreria construida con Sass (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, personalizable y te permite prototipar y crear layouts en muy poco tiempo sin conflictos con tu proyecto.</p>

<a id="markdown-ancho-de-los-bloques" name="ancho-de-los-bloques"></a>
## Ancho de los bloques

Use las clases `breakpoint-numero` donde `número` es un múltiplo de 5 desde 0 hasta 95. Asi que la clase `m-85` significa que el elemento tendrá 85% de ancho (de su contenedor) a partir de 640px.

Combine estas clases con las de alineación para crear layouts avanzados.

```html
<p class="s-75 m-50 lg-40 s-to-left m-to-center l-to-right">
    EDgrid es una libreria construida con Sass (y con versión CSS) 
    para Responsive Web Design (RWD). Es muy ligero, personalizable 
    y te permite prototipar y crear layouts en muy poco tiempo sin 
    conflictos con tu proyecto.
</p>
```

Ejemplo:

<p class="s-bg-grey s-pxy-1 s-75 m-50 lg-40 s-to-left m-to-center l-to-right">EDgrid es una libreria construida con Sass (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, personalizable y te permite prototipar y crear layouts en muy poco tiempo sin conflictos con tu proyecto.</p>

<a id="markdown-diferencia-entre-bloque--y-contenido" name="diferencia-entre-bloque--y-contenido"></a>
## Diferencia entre bloque  y contenido

Comprender la diferencia entre estos dos conceptos le ahorrará dolores de cabeza y sufrimiento. Se considera contenido a todo elemento inline y bloque a todo elemento de bloque (en la definición de HTML). Los elementos inline son mostrados por el navegador uno al lado del otro y con saltos de línea (cuando se agota el ancho). Los elementos de bloque fuerzan un salto de línea (salvo que lo modifiques con CSS).

Por ejemplo, un párrafo `<p></p>` es un bloque, pero el texto dentro de él es contenido. Así que debe preguntarse, ¿quiero todo el bloque de párrafo a la derecha o solo quiero el texto alineado a la derecha?

```html
<p class="s-right">
Este es un párrafo cuyo texto se ha alineado a la derecha
</p>
```
Ejemplo:

<p class="s-pxy-1 s-bg-grey s-right">
Este es un párrafo cuyo texto se ha alineado a la derecha
</p>

```html
<p class="s-75 s-to-right">
Este es un párrafo alineado a la derecha (como bloque)
</p>
```
Ejemplo:

<p class="s-pxy-1 s-bg-grey s-75 s-to-right">
Este es un párrafo alineado a la derecha (como bloque)
</p>

```html
<p class="s-75 s-to-center s-right">
Este es un párrafo alineado al centro como bloque <br> y con el contenido alineado a la derecha.
</p>
```
Ejemplo:

<p class="s-pxy-1 s-bg-grey s-75 s-to-center s-right">
Este es un párrafo alineado al centro como bloque <br> y con el contenido alineado a la derecha.
</p>


Comprender esta sutil diferencia es crucial para construir layouts. Por ejemplo, si quiere una imagen centrada, agregarle una clase `s-to-center` no hará nada porque las imágenes son inline (igual que los `<span>`, `<a>`, `<input>`, `<label>`). Podría maldecir a EDgrid pero así funciona CSS y no podemos hacer nada. 

\* *Puede usar estas clases también para alinear botones*

<a id="markdown-alineación-de-imágenes-y-elementos-inline" name="alineación-de-imágenes-y-elementos-inline"></a>
## Alineación de imágenes y elementos inline

Para centrar una imágen puede aplicarle la clase `breakpoint-center` a su contenedor. Por ejemplo:

```html
<div class="s-center">
    <img src="/img/tioalexys.jpg">
</div>
```
<div class="s-center ed-grid-demo s-pxy-1">
    <img src="/assets/img/alexys.jpg">
</div>

Igual si quiere alinearla a la derecha o izquierda. Y lo mismo para cualquier elemento inline.

Ahora bien, ¿qué sucede si quiero centrar directamente la imagen y no usar su contenedor? Use la clases `breakpoint-block-left`, `breakpoint-block-center` y `breakpoint-block-right` que agregan además un `display: block` al elemento inlne al que se apliquen y resuelven la alineación.

```html
<img class="s-block-center" src="/assets/img/EDgrid-isotipo.svg">
```

<div class="ed-grid-demo s-pxy-1">
    <img class="s-block-center" src="/assets/img/logo/EDgrid-isotipo.svg">
</div>

Seguro pensará: si se necesita un `display: block` agréguenlo a los estilos en lugar de crear nuevas clases. El detalle es que el elemento podría tener `display:grid`, `display:flex`, `display: table` o `display: inline-block` y no se puede forzar un `display: block` porque destruiría su layout.

<a id="markdown-sobre-el-ancho-de-las-imágenes" name="sobre-el-ancho-de-las-imágenes"></a>
### Sobre el ancho de las imágenes

Las imágenes de mapas de bits (jpg, png, gif, webp) poseen las propiedades `naturalHeight` y `naturalWidth` (accedes a ellas por JavaScript) que representan su ancho y alto original. La imagen del ejemplo anterior es de `200x200px` por eso la podemos centrar. Pero si fuera más grande habría que aplicarle además una clase para definir su ancho.

En el caso de las imágenes svg, estas son vectoriales y carecen de dichas propiedades por lo que siempre ocuparan todo el espacio disponible en su contenedor.

Ejemplo:

<img alt="Logotipo de EDgrid" width="100%" src="/assets/img/logo/EDgrid-logo.svg" class="l-block">

La podemos centrar con clases de ancho y de alineación de bloques

```html
<img alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" class="s-30 s-block-center">
```

<img alt="Logotipo de EDgrid" src="/assets/img/logo/EDgrid-logo.svg" class="s-30 s-block-center">
