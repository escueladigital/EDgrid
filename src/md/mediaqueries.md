# Mediaqueries (Sass)

EDgrid incluye mixins para crear mediaqueries fácilmente: 

1. `from($bp)`\
Para tamaños mayores al breakpoint (parámetro)
2. `to($bp) `\
Para tamaños menores al breakpoint (parámetro)
3. `fromTo($from,$to)`\
Para tamaños comprendidos entre los dos parámetros.

Los tres mixins reciben como parámetros breakpoints válidos que pueden ser del core de ed-grid `s,m,lg,xl` o números especificados en `px`, `em` o `rem`.

Ejemplos:

```scss
// Ejemplo mixin from()
.from {
  color: red;
  
  @include from(m) {
    color: blue;
  }

  @include from(700px) {
    color: red
  }
}

// Ejemplo mixin to()
.to {
  display: flex;
  
  @include to(l) {
    display: block
  }
}

// Ejemplo mixin from-to()
.from-to {
  display: block;
  
  @include from-to(m,800px) {
    display: none
  }
  
}
```

Compila a:

```scss
// From
.from{
  color:red;
}

@media screen and (min-width:40em){
  .from{
    color:blue;
  }
}

@media screen and (min-width:700px){
  .from{
    color:red;
  }
}

// To
.to {
  display:flex;
}

@media screen and (max-width:64em){
  .to {
    display:block;
  }
}

// From to
.from-to {
  display:block;
}

@media screen and (min-width:40em) and (max-width:800px){
  .from-to {
    display:none;
  }
}

```

## Control de errores

Si los parámetros pasados a estos mixins no son válidos EDgrid lanzará un mensaje en terminal indicando el error.
