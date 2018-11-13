# Funciones (Sass)
EDgrid incluye dos funciones útiles en el RWD: `em($px)` y `rem($px)`
Estas funciones convierten un número en `px` a `em` o `rem` respectivamente

```css
.selector {
  font-size: em(15px);
  max-width : rem(1000px);
 }
```
Compila a

```css
.selector{
  font-size:.9375em;
  max-width:62.5rem;
}
```
Estas funciones lanzarán un error si le pasa un valor diferente a un número en pixeles
