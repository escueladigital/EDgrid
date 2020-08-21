# Menú responsive

Un menú responsive es un buen ejemplo de cómo podemos integrar EDgrid con código ajeno a la librería. 

Toda la estructura y distribución se harán desde el marcado con la nomenclatura que ya conocemos y a la vez se usarán los mixins que otorga la librería para los estilos en Sass.

<div class="l-section"></div>
<div class="to-s">
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="notes" viewbox="0 0 24 24">
    <rect fill="none" height="24" width="24"></rect>
    <path d="M19,3H4.99C3.89,3,3,3.9,3,5l0.01,14c0,1.1,0.89,2,1.99,2h10l6-6V5C21,3.9,20.1,3,19,3z M7,8h10v2H7V8z M12,14H7v-2h5V14z M14,19.5V14h5.5L14,19.5z"></path>
  </symbol>
  <symbol id="studies" viewbox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
  </symbol>
  <symbol id="courses" viewbox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path>
  </symbol>
  <symbol id="home" viewbox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
  </symbol>
</svg>
</div>
<div class="menu-responsive s-border l-block s-bg-white s-radius-1">
    <header class="ed-menu s-bg-grey s-py-2 s-px-2 lg-px-4">
      <div class="ed-grid lg-grid-5">
        <div class="s-cross-center s-main-center lg-main-start">
            <img class="logo" src="https://ed.team/static/images/logo.svg">
        </div>
        <nav class="nav lg-cols-4 s-cross-center ed-grid full">
          <ul class="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
            <li class="lg-mr-3"><a class="link s-column s-cross-center active" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#home"></use>
                </svg><span>Inicio</span></a></li>
            <li class="lg-mr-3"><a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#studies"></use>
                </svg><span>Estudios</span></a></li>
            <li class="lg-mr-3"><a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#courses"></use>
                </svg><span>Cursos</span></a></li>
            <li><a class="link s-column s-cross-center" href="#">
                <svg class="icon to-lg s-mb-0">
                  <use href="#notes"></use>
                </svg><span>Notas</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
    <p class="s-pxy-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales convallis dui quis elementum. Aliquam erat neque, suscipit vitae nisi posuere, eleifend luctus enim. 
    <br/><br/>Praesent euismod rutrum dui, suscipit vulputate nisl tincidunt et. Aenean commodo ac ex id malesuada. Morbi luctus tempus venenatis. Integer non ante at diam cursus mattis sit amet a augue. 
    <br/><br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tempus justo sit amet velit porttitor pretium. Nam metus dolor, semper vitae dui ac, mattis varius nisi..</p>
</div>

### HTML
```html
<header class="ed-header s-bg-grey s-py-2">
  <div class="ed-grid lg-grid-5">
    <!-- Logo  -->
    <div class="s-cross-center s-main-center lg-main-start">
        <img class="logo" src="https://ed.team/static/images/logo.svg">
    </div>
    <nav class="nav lg-cols-4 s-cross-center ed-grid full">
      <!--  Menú de navegación    -->
      <ul class="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
        <!--   Item de menú. Contiene link e ícono     -->
        <li class="lg-mr-3">
          <a class="link s-column s-cross-center active" href="#">
            <!--  El ícono sólo se mostrará en la versión móvil  -->
            <svg class="icon to-lg s-mb-0">
              <use href="#home"></use>
            </svg>
            <span>Inicio</span>
          </a>
        </li>
        <li class="lg-mr-3">
          <a class="link s-column s-cross-center" href="#">
            <svg class="icon to-lg s-mb-0">
              <use href="#studies"></use>
            </svg>
            <span>Estudios</span>
          </a>
        </li>
        <li class="lg-mr-3">
          <a class="link s-column s-cross-center" href="#">
            <svg class="icon to-lg s-mb-0">
              <use href="#courses"></use>
            </svg>
            <span>Cursos</span>
          </a>
        </li>
        <li>
          <a class="link s-column s-cross-center" href="#">
            <svg class="icon to-lg s-mb-0">
              <use href="#notes"></use>
            </svg>
            <span>Notas</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
```

### SCSS

La mayoría del siguiente código es para estética del menú.

```scss
// Posicionamiento del header
.ed-header {
  position : fixed;
  top      : 0;
  width    : 100%;
  z-index  : 100;

  .logo { height : 2rem }

  // Posicionamiento del nav
  // Utilizamos el mixin to() de EDgrid para que sólo se aplique en móvil
  .nav {
      @include to(lg) { 
        position : fixed;
        left     : 0;
        bottom   : 0;
        background : black;
      }
  }

  .menu { list-style : none }
 
   // Colores de links del menú
  .link {
    color : lightgrey;
    &.active { color : cornflowerblue }
    @include from(lg) { color : grey }
  }

   // Estilos para los íconos
  .icon {
    --size : 1.5rem;
    width  : var(--size);
    height : var(--size);
    fill   : currentColor;
  }

}
```

### SVG

Este componente utiliza íconos para su versión móvil. Puede crear un archivo SVG donde guarde todo el siguiente código o ponerlo al lado de la estructura del header en el HTML.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="notes" viewBox="0 0 24 24">
    <rect fill="none" height="24" width="24"></rect>
    <path d="M19,3H4.99C3.89,3,3,3.9,3,5l0.01,14c0,1.1,0.89,2,1.99,2h10l6-6V5C21,3.9,20.1,3,19,3z M7,8h10v2H7V8z M12,14H7v-2h5V14z M14,19.5V14h5.5L14,19.5z"></path>
  </symbol>
  <symbol id="studies" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
  </symbol>
  <symbol id="courses" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path>
  </symbol>
  <symbol id="home" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
  </symbol>
</svg>
```
