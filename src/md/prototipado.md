# Prototipado

<!-- TOC -->

- [Botones](#botones)
- [Bordes](#bordes)
- [Esquinas redondeadas](#esquinas-redondeadas)
- [Fondos](#fondos)
- [Sombras](#sombras)

<!-- /TOC -->

--- 

EDgrid le permite hacer prototipos rápidos con poco esfuerzo. La opción de prototipado viene activada por defecto en el proyecto, por lo que no necesita hacer ajustes extras para empezar a usarla.

<a id="markdown-botones" name="botones"></a>
## Botones

Agrega la clase `button` a un elemento. Si necesita darle márgenes, centrarlo, etc, use las clases que EDgrid proporciona.

<div class="button">Soy un boton</div>

<a id="markdown-bordes" name="bordes"></a>
## Bordes

* Use la clase `breakpoint-border` para agregar un borde a los cuatro lados.
* Use la clase `breakpoint-border-none` para anular el borde en los cuatro lados.
* Use la clase `breakpoint-border-[top|right|bottom|left]` para agregar un borde solo en el lado seleccionado.
* Use la clase `breakpoint-border-[top|right|bottom|left]-none` para anular el borde en el lado seleccionado.

```html
<div class="s-border lg-30 lg-to-center s-pxy-2">
    <h3 class="s-border-bottom">Soy una tarjeta</h3>
    <p class="s-mb-0">Yo soy el contenido de esta tarjeta</p>
</div>
```

<div class="s-border lg-30 lg-to-center s-pxy-2">
<h3 class="s-border-bottom">Soy una tarjeta</h3>
<p class="s-mb-0">Yo soy el contenido de esta tarjeta</p>
</div>

<a id="markdown-esquinas-redondeadas" name="esquinas-redondeadas"></a>
## Esquinas redondeadas

* Use la clase `breakpoint-radius` para asignar un border-radius a las cuatro esquinas.
* Use la clase `breakpoint-radius-none` para anular el border-radius de las cuatro esquinas
* Use la clase `breakpoint-radius-[tl|tr|br|bl]` para agregar border-radius en `top-left|top-right|bottom-right|bottom-left` respectivamente
* Use la clase `breakpoint-radius-[tl|tr|br|bl]-none` para anular el border-radius en `top-left|top-right|bottom-right|bottom-left` respectivamente

```html
<div class="s-radius s-border lg-30 lg-to-center s-pxy-2">
    <h3 class="s-border-bottom">Soy una tarjeta</h3>
    <p class="s-mb-0">Yo soy el contenido de esta tarjeta</p>
</div>
```

<div class="s-radius s-border lg-30 lg-to-center s-pxy-2">
<h3 class="s-border-bottom">Soy una tarjeta</h3>
<p class="s-mb-0">Yo soy el contenido de esta tarjeta</p>
</div>

<a id="markdown-fondos" name="fondos"></a>
## Fondos

Puede usar las clases `breakpoint-bg-[grey|blue]` Para asignarle un fondo a un elemento. Así podemos crear componentes muy rápido. Por ejemplo, tarjetas:

```html
<div class="lg-50 lg-to-center s-bg-grey s-radius s-pxy-2 l-block">
    <p>EDgrid es una libreria construida con Sass (y con versión CSS) 
        para Responsive Web Design (RWD). Es muy ligero, personalizable 
        y te permite prototipar y crear layouts en muy poco tiempo 
        sin conflictos con tu proyecto.</p>
    <div class="button">Empezar con EDgrid</div>
</div>
```

<div class="lg-50 lg-to-center s-bg-grey s-radius s-pxy-2 l-block">
    <p>EDgrid es una libreria construida con Sass (y con versión CSS) 
    para Responsive Web Design (RWD). Es muy ligero, personalizable 
    y te permite prototipar y crear layouts en muy poco tiempo sin 
    conflictos con tu proyecto.</p>
    <div class="button">Empezar con EDgrid</div>
</div>

```html
<div class="lg-50 lg-to-center s-border s-radius">
  <p class="s-pxy-2 s-mb-0">EDgrid es una libreria construida con Sass 
      (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, 
      personalizable y te permite prototipar y crear layouts en muy poco
      tiempo sin conflictos con tu proyecto.</p>
  <div class="s-bg-grey s-pxy-2">
    <div class="button">Empezar con EDgrid</div>
  </div>
</div>
```

<div class="lg-50 lg-to-center s-border s-radius">
<p class="s-pxy-2 s-mb-0">EDgrid es una libreria construida con Sass (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, personalizable y te permite prototipar y crear layouts en muy poco tiempo sin conflictos con tu proyecto.</p>
<div class="s-bg-grey s-pxy-2">
    <div class="button">Empezar con EDgrid</div>
</div>
</div>


<a id="markdown-sombras" name="sombras"></a>
## Sombras

* Use las clases `breakpoint-shadow` para aplicar sombras en los cuatro lados.
* Use las clases `breakpoint-shadow-[top|right|bottom|left]` para aplicar sombras en los lados seleccionados
* Use las clases `breakpoint-shadow-none` para anular las sombras en los cuatro lados.

```html
<img class="s-shadow s-block-center" src="/img/tioalexys.jpg">
```

<img class="s-shadow s-block-center l-block" src="/assets/img/alexys.jpg">

```html
<div class="s-shadow-bottom lg-50 lg-to-center s-border s-radius">
  <p class="s-pxy-2 s-mb-0">EDgrid es una libreria construida con Sass 
      (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, 
      personalizable y te permite prototipar y crear layouts en muy poco 
      tiempo sin conflictos con tu proyecto.</p>
  <div class="s-bg-grey s-pxy-2">
    <div class="button">Empezar con EDgrid</div>
  </div>
</div>
```

<div class="s-shadow-bottom lg-50 lg-to-center s-border s-radius">
<p class="s-pxy-2 s-mb-0">EDgrid es una libreria construida con Sass (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, personalizable y te permite prototipar y crear layouts en muy poco tiempo sin conflictos con tu proyecto.</p>
<div class="s-bg-grey s-pxy-2">
    <div class="button">Empezar con EDgrid</div>
</div>
</div>
