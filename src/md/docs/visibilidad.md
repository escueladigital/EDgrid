# Visibilidad (CSS/Sass)
El componente visibilidad permite definir los breakpoints en los que un elemento se mostrará y los breakpoints en los que se ocultará.

##Uso con CSS (cssHelpers)
Use las clases `from-bp` o `to-bp` donde bp es un breakpoint válido de ed-grid (`s,m,l,xl`)

`from-bp` hará al elemento visible a partir del breakpoint especificado e invisible por debajo de él.

`to-bp` hará al elemento visible por debajo del breakpoint especificado e invisible por encima de él.

## Uso con Sass
En la versión Sass cuenta con cuatro mixins que reciben como parámetro un breakpoint del core de ed-grid ( `s,m,l,xl`) o uno en `px`, `em` o `rem`.

* `showFrom($bp)` Muestra el elemento solo por encima del breakpoint especificado en el parámetro.
* `showTo($bp)` Muestra el elemento solo por debajo del breakpoint especificado en el parámetro.
* `hideFrom($bp)` Oculta el elemento por encima del breakpoint especificado en el parámetro.
* `hideTo($bp)` Oculta el elemento por debajo del breakpoint especificado en el parámetro.

Ejemplo
```scss
.menu-movil {
  @include hideFrom(l)
}

.menu-desktop {
  @include showFrom(xl)
}
```

Compila a
```scss
@media screen and (min-width:64em){
  .menu-movil{
    display:none;
  }
}

@media screen and (max-width:90em){
  .menu-desktop{
    display:none;
  }
}
```
