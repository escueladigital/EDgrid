# Prototipado (beta)

<!-- TOC -->

- [Botones](#botones)
- [Bordes](#bordes)
- [Esquinas redondeadas](#esquinas-redondeadas)
- [Fondos](#fondos)
- [Sombras](#sombras)
- [Ratios](#ratios)
- [Contenedores de imágenes](#contenedores-de-im%C3%A1genes)
- Contenedor sticky (próximamente)

<!-- /TOC -->

--- 

EDgrid le permite hacer prototipos rápidos con poco esfuerzo. 

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

<img class="s-shadow s-block-center l-block" src="https://ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/pictures/2018-11/tioalexys.jpg">

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


<a id="markdown-ratios" name="ratios"></a>
## Ratios

Con los ratios puede obtener elementos de un proporcion de ancho y alto definidos. Por ejemplo **3 x 1** (el triple de ancho que de alto). Tenga en cuenta que por limitaciones de css los elementos con ratio siempre tienen el 100% del ancho de su contenedor.

Use las clases `breakpoint-ratio-x-y` donde `x` y `y` son numeros enteros del 1 al 4. `x` representa el ancho y `y` el alto.

```html
<div class="ed-grid lg-grid-3 lg-60 lg-to-center s-pxy-1 s-border s-radius s-shadow-bottom">
    <div class="s-ratio-16-9 lg-ratio-2-3 s-bg-blue s-mb-2 lg-mb-0"></div>
    <div class="lg-cols-2">
        <h3>Bienvenido a a EDgrid</h3>
        <p>EDgrid es una libreria construida con Sass (y con versión CSS) 
            para Responsive Web Design (RWD). Es muy ligero, personalizable.</p>
        <div class="button">Comenzar con EDgrid</div>
    </div>
</div>
```

<div class="ed-grid lg-grid-3 lg-60 lg-to-center s-pxy-1 s-border s-radius s-shadow-bottom l-block">
    <div class="s-ratio-16-9 lg-ratio-2-3 s-bg-blue s-mb-2 lg-mb-0"></div>
    <div class="lg-cols-2">
        <h3>Bienvenido a a EDgrid</h3>
        <p>EDgrid es una libreria construida con Sass (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, personalizable.</p>
        <div class="button">Comenzar con EDgrid</div>
    </div>
</div>

Además EDgrid incluye las clases `breakpoint-ratio-16-9`, `breakpoint-ratio-9-16` y `breakpoint-ratio-21-9` Ya que son proporciones comunes de elementos multimedia.

<a id="markdown-contenedores-de-imágenes" name="contenedores-de-imágenes"></a>
## Contenedores de imágenes

Puede usar las clases de ratios para contener imagenes evitando que se desborden o se deformen. Solo agregue la clase `img-container`.

```html
<div class="ed-grid s-grid-2 m-grid-3 lg-grid-4 s-cross-center">
    <div class="s-ratio-4-3 img-container">
        <img src="https://cocha2018.ed.team/assets/img/banner-edcamp.jpg">
    </div>
    <div class="s-ratio-9-16 img-container">
        <img src="https://cocha2018.ed.team/assets/img/banner-edcamp.jpg">
    </div>
    <div class="circle">
        <img src="https://cocha2018.ed.team/assets/img/banner-edcamp.jpg">
    </div>
    <div class="s-ratio-16-9 img-container">
        <img src="https://cocha2018.ed.team/assets/img/banner-edcamp.jpg">
    </div>
</div>
```

La imagen es la misma en todos los casos:

<div class="ed-grid s-grid-2 m-grid-3 lg-grid-4 l-block s-cross-center">
    <div class="s-ratio-4-3 img-container">
        <img src="https://cocha2018.ed.team/assets/img/banner-edcamp.jpg">
    </div>
    <div class="s-ratio-9-16 img-container">
        <img src="https://cocha2018.ed.team/assets/img/banner-edcamp.jpg">
    </div>
    <div class="circle img-container">
        <img src="https://cocha2018.ed.team/assets/img/banner-edcamp.jpg">
    </div>
    <div class="s-ratio-16-9 img-container">
        <img src="https://cocha2018.ed.team/assets/img/banner-edcamp.jpg">
    </div>
</div>

* Puede usar la clase `circle` para obtener un círculo perfecto sin usar clases de ratio. Si va a usarlo para contener una imagen, agregué tambien la clase `img-container`.

Ejemplo de tarjeta:

```html
<div class="lg-50 lg-to-center">
    <!--Contenedor de la imagen-->
    <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <img src="/img/curso.jpg">
    </div>
    <!--Contenido-->
    <div class="s-border s-radius-br s-radius-bl s-shadow-bottom">
        <div class="s-pxy-2">
            <h3>Curso Bases de Datos Desde Cero</h3>
            <p class="s-mb-0">Diseña, estructura y administra bases de datos 
                SQL y crea un sistema de facturación</p>
        </div>
        <footer class="s-cross-center s-bg-grey s-pxy-2">
            <!--Define el ancho máximo de la imagen-->
            <div class="s-10 s-mr-1">
            <!--Contenedor de la imagen-->
            <div class="circle img-container">
                <img  src="/img/tioalexys.jpg">
            </div>
            <!--Profesor-->
            </div>
            <p class="s-mb-0">Prof. Alexys Lozada</p>
            <!--Boton-->
            <div class="button s-to-right">$40USD</div>
        </footer>
    </div>
</div>
```

<div class="lg-50 lg-to-center">
    <!--Contenedor de la imagen-->
    <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <img src="https://ed.team/sites/default/files/styles/large/public/courses/images/sql.jpg?itok=ndgCTmxW">
    </div>
    <!--Contenido-->
    <div class="s-border s-radius-br s-radius-bl s-shadow-bottom">
        <div class="s-pxy-2">
            <h3>Curso Bases de Datos Desde Cero</h3>
            <p class="s-mb-0">Diseña, estructura y administra bases de datos SQL y crea un sistema de facturación</p>
        </div>
        <footer class="s-cross-center s-bg-grey s-pxy-2">
            <!--Define el ancho máximo de la imagen-->
            <div class="s-10 s-mr-1">
            <!--Contenedor de la imagen-->
            <div class="circle ">
                <img  src="https://ed.team/sites/default/files/styles/thumbnail/public/pictures/2018-11/tioalexys.jpg?itok=7vDpJuSh">
            </div>
            <!--Profesor-->
            </div>
            <p class="s-mb-0">Prof. Alexys Lozada</p>
            <!--Boton-->
            <div class="button s-to-right">$40USD</div>
        </footer>
    </div>
</div>
