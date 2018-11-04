# Core (CSS/Sass)
El componente core es el que genera los ed-container y ed-item y sus dimensiones.
## Uso con CSS (cssCore)
Para la version CSS, basta con seguir los pasos para los `ed-container` y `ed-item` indicados en el flujo de trabajo con ed-grid
## Sass
Si se trabaja con Sass, es recomendable tener la variable `$cssHelpers` en `true` para que se compilen los tamaños para los `ed-item` y seguir el flujo de trabajo recomendado con ed-grid

Además puede hacer que cualquier elemento sea un ed-container y un ed-item usando los mixins `edContainer()` y `edItem()`

```markup
<main class="page-main">
  <article class="page-content"></article>
  <aside class="page-sidebar"></aside>
</main>
```

```scss
.page-main {
  @include edContainer;
}

.page-content {
  @include edItem(100,100,75)
}

.page-sidebar {
  @include edItem(100,100,25)
}
```

El scss anterior compila a:
```scss
.page-content{
  width:100%;
}

@media screen and (min-width:40em){
  .page-content{
    width:33.33333%;
  }
}

@media screen and (min-width:64em){
  .page-content{
    width:75%;
  }
}

@media screen and (min-width:90em){
  .page-content{
    width:68%;
  }
}

.page-sidebar{
  width:100%;
}

@media screen and (min-width:40em){
  .page-sidebar{
    width:66.66667%;
  }
}

@media screen and (min-width:64em){
  .page-sidebar{
    width:25%;
  }
}

@media screen and (min-width:90em){
  .page-sidebar{
    width:32%;
  }
}
```

El mixin `edItem()` recibe 4 parametros, los cuatro opcionales. Uno por cada breakpoint `s, m, l, xl` puede pasar el tamaño que desee, incluso fracciones. Por ejemplo:

```scss
.page-aside  { 
  @include edItem(50,1/3) 
}
```

Compila a

```scss
.page-aside{
  width:50%;
}

@media screen and (min-width:40em){
  .page-aside{
    width:33.33333%;
  }
}
```
