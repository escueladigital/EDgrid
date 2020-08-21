# Ratios e imágenes

<!-- TOC -->

- [Ratios](#ratios)
- [Imágenes](#imagenes)

<!-- /TOC -->

---

Con los ratios puede obtener elementos de un proporcion de ancho y alto definidos. Por ejemplo **3 x 1** (el triple de ancho que de alto). Tenga en cuenta que por limitaciones de css los elementos con ratio siempre tienen el 100% del ancho de su contenedor.

<a id="markdown-ratios" name="ratios"></a>
## Ratios

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


<a id="markdown-imagenes" name="imagenes"></a>
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
        <img src="/assets/img/edcamp-mexico.png">
    </div>
    <div class="s-ratio-9-16 img-container">
        <img src="/assets/img/edcamp-mexico.png">
    </div>
    <div class="circle img-container">
        <img src="/assets/img/edcamp-mexico.png">
    </div>
    <div class="s-ratio-16-9 img-container">
        <img src="/assets/img/edcamp-mexico.png">
    </div>
</div>

* Puede usar la clase `circle` para obtener un círculo perfecto sin usar clases de ratio. Si va a usarlo para contener una imagen, agregué tambien la clase `img-container`.
