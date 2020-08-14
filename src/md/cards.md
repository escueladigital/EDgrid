# Cards

<!-- TOC -->
- [Card básico](#card-basico)
- [Card horizontal](#card-horizontal)
<!-- /TOC -->

---

Recuerde que EDgrid es una librería enfocada al RWD, por lo que no tiene componentes o estilos integrados por defecto, pero puede utilizar el prototipado y el prototipado avanzado para crear sus propios componentes. 

<a id="markdown-card-basico" name="card-basico"></a>
## Card básico

Ejemplo de tarjeta creada con el prototipado integrado:

<div class="m-40 lg-to-center l-block">
    <article class="s-shadow-bottom">
        <!--Contenedor de la imagen-->
        <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src="/assets/img/poster-curso.png">
        </div>
        <!--Contenido-->
        <div class="s-bg-white s-pxy-2">
            <h3>Curso Bases de Datos Desde Cero</h3>
            <p class="s-mb-0">Diseña, estructura y administra bases de datos SQL y crea un sistema de facturación</p>
        </div>
        <footer class="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
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
    </article>
</div>

```html
<article class="s-shadow-bottom">
    <!--Contenedor de la imagen-->
    <div class="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
        <img src="/assets/img/poster-curso.png">
    </div>
    <!--Contenido-->
    <div class="s-bg-white s-pxy-2">
        <h3>Curso Bases de Datos Desde Cero</h3>
        <p class="s-mb-0">Diseña, estructura y administra bases de datos SQL y crea un sistema de facturación</p>
    </div>
    <footer class="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
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
</article>
```

<a id="markdown-card-horizontal" name="card-horizontal"></a>
## Card horizontal

Este card se mostrará en formato horizontal en desktop y pasará a ser vertical en dispositivos móviles.

<div class="m-65 s-to-center l-block">
    <article class="s-shadow-bottom">
      <!-- Póster y contenido -->
      <div class="ed-grid m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
        <!-- Contenedor de la imagen -->
        <div class="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
            <img src="/assets/img/poster-curso.png">
        </div>
        <!-- Contenido -->
        <div class="s-pxy-2 m-pxy-0 m-cols-3">
            <h3>Curso Bases de Datos Desde Cero</h3>
            <p class="s-mb-0">Diseña, estructura y administra 
                              bases de datos SQL y crea un sistema de facturación</p>
        </div>
      </div>
      <footer class="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
          <!-- Define el ancho máximo de la imagen -->
          <div class="s-10 m-5 s-mr-1">
              <!-- Contenedor de la imagen -->
              <div class="circle ">
                  <img  src="/assets/img/alexys.jpg">
              </div>
          </div>
          <!-- Profesor -->
          <p class="s-mb-0">Prof. Alexys Lozada</p>
          <!-- Botón -->
          <div class="button s-to-right">$40USD</div>
      </footer>
    </article>
</div>

```html
<article class="s-shadow-bottom">
  <!-- Póster y contenido -->
  <div class="ed-grid m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
    <!-- Contenedor de la imagen -->
    <div class="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
        <img src="/assets/img/poster-curso.png">
    </div>
    <!-- Contenido -->
    <div class="s-pxy-2 m-pxy-0 m-cols-3">
        <h3>Curso Bases de Datos Desde Cero</h3>
        <p class="s-mb-0">Diseña, estructura y administra 
                          bases de datos SQL y crea un sistema de facturación</p>
    </div>
  </div>
  <footer class="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
      <!-- Define el ancho máximo de la imagen -->
      <div class="s-10 m-5 s-mr-1">
          <!-- Contenedor de la imagen -->
          <div class="circle ">
              <img  src="/assets/img/alexys.jpg">
          </div>
      </div>
      <!-- Profesor -->
      <p class="s-mb-0">Prof. Alexys Lozada</p>
      <!-- Botón -->
      <div class="button s-to-right">$40USD</div>
  </footer>
</article>
```
