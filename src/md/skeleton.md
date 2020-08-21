# Skeleton

Los componenentes skeleton son una vista previa del contenido que se muestra antes de que se carguen los datos para reducir la frustración del usuario con los tiempos de cargas lentos en un sitio web. Una vez que terminan de cargar, el skeleton desaparece.

En sí no existe un componente único para los skeleton, porque todo dependerá de la UI que tengan en su proyecto, pero eso no es problema ya que con el prototipado usted podrá recrear la gran mayoría de ésta.

## Skeleton de card

<div class="ed-grid m-grid-2 rows-gap l-section">
    <article class="s-shadow-bottom m-order-1">
        <div class="s-bg-grey s-ratio-16-9 img-container s-radius-tl s-radius-tr"></div>
        <div class="s-bg-white s-pxy-2">
            <div class="s-bg-grey s-py-2 s-mb-2"></div>
            <div class="s-bg-grey s-py-1 s-mb-1"></div>
            <div class="s-bg-grey s-py-1 s-70"></div>
        </div>
        <footer class="s-py-4 s-bg-grey">
            <div class="s-py-1"></div>
        </footer>
    </article>
    <article class="s-shadow-bottom">
        <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src="/assets/img/poster-curso.png">
        </div>
        <div class="s-bg-white s-pxy-2">
            <h3>Curso Bases de Datos Desde Cero</h3>
            <p class="s-mb-0">Diseña, estructura y administra bases de datos SQL y crea un sistema de facturación</p>
        </div>
        <footer class="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
            <div class="s-10 s-mr-1">
            <div class="circle ">
                <img  src="/assets/img/alexys.jpg">
            </div>
            </div>
            <p class="s-mb-0">Prof. Alexys Lozada</p>
            <div class="button s-to-right">$40USD</div>
        </footer>
    </article>
</div>

```html
<article class="s-shadow-bottom">
    <div class="s-bg-grey s-ratio-16-9 img-container s-radius-tl s-radius-tr"></div>
    <div class="s-bg-white s-pxy-2">
        <div class="s-bg-grey s-py-2 s-mb-2"></div>
        <div class="s-bg-grey s-py-1 s-mb-1"></div>
        <div class="s-bg-grey s-py-1 s-70"></div>
    </div>
    <footer class="s-py-4 s-bg-grey">
        <div class="s-py-1"></div>
    </footer>
</article>
```
