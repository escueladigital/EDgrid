# Mediaqueries (Sass)
Con ed-grid escribir media queries es tan sencillo como usar cualquiera de estos tres mixins `from($bp)` `to($bp) ` `fromTo($from,$to)`
Los tres mixins reciben como parámetros breakpoints válidos que pueden ser del core de ed-grid `s,m,l,xl` o números especificados en `px`, `em` o `rem`.

`from($bp)` remplaza al antiguo `desde($size)` significa que los estilos se aplicarán desde ese breakpoint en adelante. 

`to($bp)` remplaza al antiguo `hasta($size)` significa que los estilos se aplicarán por debajo de ese breakpoint.

`fromTo($from,$to)` permite establecer estilos que comiencen en el primer breakpoint (parámetro `$from`) y terminen en el segundo breakpoint (parámetro `$to`)

Ejemplo 1 `from($bp)`:
```scss
.selector {
  color: red;
  @include from(m) {
    color: blue;
  }

  @include from(700px) {
    color: red
  }
}
```

Compila a:

```scss
.selector{
  color:red;
}

@media screen and (min-width:40em){
  .selector{
    color:blue;
  }
}

@media screen and (min-width:700px){
  .selector{
    color:red;
  }
}
```

Ejemplo 2 `to($bp)`
```scss
.selector {
  display: flex;
  @include to(l) {
    display: block
  }
}
```

Compila a:
```scss
.selector{
  display:flex;
}

@media screen and (max-width:64em){
  .selector{
    display:block;
  }
}
```

Ejemplo3 fromTo($from,$to)`

```scss
.selector {
  display: block;
  @include fromTo(m,800px) {
    display: none
  }
}
```

Compila a

```scss
.selector{
  display:block;
}

@media screen and (min-width:40em) and (max-width:800px){
  .selector{
    display:none;
  }
}
```

Tenga en cuenta que **ed-grid** lazará un error si pasa breakpoints inválidos o si en el mixin `fromTo()` el segundo parámetro no es mayor que el primero.
