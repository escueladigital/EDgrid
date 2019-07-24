# Visibilidad
El componente visibilidad permite definir los breakpoints en los que un elemento se mostrará y los breakpoints en los que se ocultará.

## Uso con CSS
Use las clases `from-breakpoint` o `to-breakpoint` donde **breakpoint** es un breakpoint válido de EDgrid (`s,m,l,xl`)

`from-lg` hará al elemento visible a partir de 1024px e invisible por debajo de esa medida.

`to-xl` Hará al elemento visible por debajo de 1440px e invisible por encima de él.

## Uso con Sass
En la versión Sass cuenta con cuatro mixins que reciben como parámetro un breakpoint del core de ed-grid ( `s,m,l,xl`) o uno en `px`, `em` o `rem`.

* `showFrom($bp)` Muestra el elemento solo por encima del breakpoint especificado en el parámetro.
* `showTo($bp)` Muestra el elemento solo por debajo del breakpoint especificado en el parámetro.
* `hideFrom($bp)` Oculta el elemento por encima del breakpoint especificado en el parámetro.
* `hideTo($bp)` Oculta el elemento por debajo del breakpoint especificado en el parámetro.

Ejemplo
```scss
.menu-movil {
  @include hideFrom(lg)
}

.menu-desktop {
  @include showFrom(xl)
}
```

Compila a
```scss
@media screen and (min-width:1024px){
  .menu-movil{
    display:none;
  }
}

@media screen and (max-width:1440px){
  .menu-desktop{
    display:none;
  }
}
```
