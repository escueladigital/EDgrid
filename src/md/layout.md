# Layout

<!-- TOC -->

- [Secciones](#secciones)
    - [Anular espaciado entre secciones](#anular-espaciado-entre-secciones)
    - [Valores de los espaciados verticales](#valores-de-los-espaciados-verticales)
- [Espaciado vertical entre contenido](#espaciado-vertical-entre-contenido)
    - [Titulos](#titulos)
    - [Contenido](#contenido)
- [Márgenes](#m%C3%A1rgenes)
    - [Márgenes negativos](#m%C3%A1rgenes-negativos)
- [Paddings](#paddings)

<!-- /TOC -->

--- 

EDgrid agrega clases para crear separaciones exteriores (margin) e interiores (padding) para crear layouts armoniosos y bien distribuidos.

Para seguir buenas prácticas, considere lo siguiente:

* Las clases de layout comienzan con `l-`. *Además todos l
* Los espacios verticales se crean solamente con `margin-bottom`. 
* La propiedad `margin-top` se usa solamente en negativo para cancelar una separación vertical
* Los espacios horizontales se crean solamente con `margin-right`
* La propiedad `margin-left` se usa solo en negativo para cancelar una separación horizontal.
* Evite usar css para márgenes y paddings, utilice las clases de EDgrid

<a id="markdown-secciones" name="secciones"></a>
## Secciones

En EDgrid existen tres tipos de secciones que se indican con las siguientes clases.
    
* `l-block` Bloques pequeños como widgets, cards, separadores.
* `l-section` Sección grande de contenido.
* `l-big-section` Igual que el anterior pero cuando se quiere dar una separación mayor. 
 
<a id="markdown-anular-espaciado-entre-secciones" name="anular-espaciado-entre-secciones"></a>
### Anular espaciado entre secciones

Si en algun caso desea anular el espaciado de una seccion con la anterior. Use las siguientes clases:

* `cancel-l-block` Cancela margin-bottom de hermano anterior `l-block`
* `cancel-l-section` Cancela margin-bottom de hermano anterior `l-section`
* `cancel-l-big-section` Cancela margin-bottom de hermano anterior `l-big-section`

<a id="markdown-valores-de-los-espaciados-verticales" name="valores-de-los-espaciados-verticales"></a>
### Valores de los espaciados verticales

EDgrid usa la variable CSS `--vertical-block-space` cuyo valor cambia según el breakpoint

```scss
:root {
  --vertical-block-space   : #{$l-unit * 2};  // 1rem

  @include from(lg) {
    --vertical-block-space : #{$l-unit * 4};  // 2rem
  }
}
```

El código que crea las separaciones es el siguiente.

```scss
// Block
.l-block {
  margin-bottom : var(--vertical-block-space); // 1rem mobile, 2rem desktop
}

.cancel-l-block {
  margin-top : calc(var(--vertical-block-space) * -1);
}

// Section
.l-section {
  margin-bottom : calc(var(--vertical-block-space) * 2); // 2rem mobile, 4rem desktop
}

.cancel-l-section {
  margin-top : calc(var(--vertical-block-space) * -2); 
}

// Big section
.l-big-section {
  margin-bottom : calc(var(--vertical-block-space) * 4); // 4rem mobile, 8rem desktop
}

.cancel-l-big-section {
  margin-top : calc(var(--vertical-block-space) * -4);
}
```

<a id="markdown-espaciado-vertical-entre-contenido" name="espaciado-vertical-entre-contenido"></a>
## Espaciado vertical entre contenido

EDgrid incluye espaciado vertical armonioso entre contenido (parrafos, titulos, listas, etc). No tiene que hacer nada. Solo escribir su contenido.

<a id="markdown-titulos" name="titulos"></a>
### Titulos


```scss
:root {
  --vertical-content-space : 1rem;
}
// Encabezados
h1, h2, h3, h4, h5, h6 {
  margin-top    : 0;
  margin-bottom : var(--vertical-content-space);
}

h1 {
  margin-bottom : calc(var(--vertical-content-space) * 1.5) !important;
}
```
    
<a id="markdown-contenido" name="contenido"></a>
### Contenido

La norma recomienda encerrar cada sección en una etiqueta section. Pero en la práctica es dificil conseguirlo siempre así que la presenciad e un titulo indica el cambio de sección y por eso se le agrega una separación vertical mayor con el hermano anterior.

```scss
:root {
  --vertical-content-space : 1rem;
}

p,
video,
blockquote,
article,
section,
form,
figure,
iframe,
ul,
ol,
pre,
hr,
dl,
address {
  margin-top    : 0;
  margin-bottom : var(--vertical-content-space);

  + h2 {
    padding-top : calc(var(--vertical-content-space) * 1.5);
  }

  + h3 {
    padding-top : var(--vertical-content-space);
  }
}
```

<a id="markdown-márgenes" name="márgenes"></a>
## Márgenes

Use las clases de márgenes para separar elementos. La nomenclatura es la siguiente `breakpoint-mr-numero` y `breakpoint-mb-numero` Donde `mr` es `margin-right` y `mb` es `margin-bottom`.

El número va de 0 a 4 con separaciones de `.5rem` Por ejemplo `lg-mb-0` significa `margin-bottom:0` a partir del breakpoint `lg`. Y `m-br-4` sinifica `margin-right: 2rem` a partir del breakpoint `m`.

\* *Puede usar el numero `05` para crear separaciones de `.25rem`. Ejemplo: `s-mb-05`.*

```html
<img alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" width="200">
<img alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" width="200">
```
<div class="ed-grid-demo s-pxy-1">
<img alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" width="200">
<img alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" width="200">
</div>

Usando margenes

```html
<img class="m-mr-2 s-mb-2" alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" width="200">
<img alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" width="200">
```

<div class="ed-grid-demo s-pxy-1">
<img class="m-mr-2 s-mb-2" alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" width="200">
<img alt="Logotipo de EDgrid" src="/assets/img/EDgrid-logo.svg" width="200">
</div>

<a id="markdown-márgenes-negativos" name="márgenes-negativos"></a>
### Márgenes negativos

Con la misma nomenclatura puede crear márgenes superiores `margin-top` e izquierdos `margin-left` pero estos siempre serán negativos y debe usarlos para cancelar una separación con un hermano anterior.

```html
<h1>Bienvenidos a EDteam</h1>
<p>Este es un subtítulo pero aparecerá muy abajo del título</p>
```
Ejemplo:

<div class="ed-grid-demo s-pxy-1">
<h1>Bienvenidos a EDteam</h1>
<p>Este es un subtítulo pero aparecerá muy abajo del título</p>
</div>

Usando márgenes negativos:

```html
<h1>Bienvenidos a EDteam</h1>
<p class="s-mt-3">Este es un subtítulo con un margen superior negativo</p>
```

Ejemplo:

<div class="ed-grid-demo s-pxy-1">
<h1>Bienvenidos a EDteam</h1>
<p class="s-mt-3">Este es un subtítulo con un margen superior negativo</p>
</div>


<a id="markdown-paddings" name="paddings"></a>
## Paddings

Los paddings agregan una separación interna y tienen la siguiente nomenclatura de clases: `breakpoint-p[direction]-numero`

Donde `direction` puede ser `t` (top), `r` (right), `b` (bottom), `l` (left). Por ejemplo: `xl-pb-4`. Al igual que en margin, los números van de 0 a 4 indicando separaciones de `.5rem`.

* Para paddings verticales (top y bottom a la vez) use `breakpoint-py-numero)`. 
* Para paddings horizontales (left y right a la vez) use `breakpoint-px-numero`
* Para paddings en las cuatro direcciones use `breakpoint-pxy-numero`

\* *Puede usar el numero `05` para crear paddings de `.25rem`. Ejemplo: `s-py-05`.*
