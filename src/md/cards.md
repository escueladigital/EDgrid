# Cards

Recuerde que EDgrid es una librería enfocada al RWD, por lo que no tiene componentes o estilos integrados por defecto, pero puede utilizar el prototipado y el prototipado avanzado para crear sus propios componentes. 

Ejemplo de tarjeta creada con el prototipado integrado:

```html
<article>
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
</article>
```
<div class="lg-50 lg-to-center">
    <article>
        <!--Contenedor de la imagen-->
        <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src="/assets/img/poster-curso.png">
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
                    <img  src="/assets/img/alexys.jpg">
                </div>
                <!--Profesor-->
                </div>
                <p class="s-mb-0">Prof. Alexys Lozada</p>
                <!--Boton-->
                <div class="button s-to-right">$40USD</div>
            </footer>
        </div>
    </article>
</div>
