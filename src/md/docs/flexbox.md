# Flexbox (CSS/Sass)

El core de ed-grid está construido con flexbox, cero floats, display:table, inline-blocks u otros hacks extraños. Sin embargo, ed-grid ofrece muchas utilidades extra para aprovechar el poder de flexbox.

Estas utilidades están dentro de los helpers de CSS ($cssHelpers : true) por lo que se recomienda activarlos aunque su flujo de trabajo sea con Sass.

* Flexbox alinea los elementos respecto a dos ejes: main (horizontal por defecto) y cross (vertical por defecto).
* En las siguientes instrucciones, la version css indicará la clase que debe añadirse al marcado html del contenedor
* En la versión Sass se indicará el mixin que debe incluirse al contenedor
* En la version CSS (cssCore), si desea indicar un breakpoint, inicie la clase con él, así `l-main-justify` `m-flex-reverse` `xl-cross-center`
* Si no indica el breakpoint (cssHelpers), así `cross-end`

## Alineaciones en el eje principal
### Alinear los elementos a la izquierda y derecha
#### Versión con css

```markup
<!-- version con css -->
<div class="main-justify">
<div>1</div>
<div>2</div>
<div>3</div>
</div>
```
#### Versión con Sass

```scss
// version con Sass *******
.container { @include mainJustify }
```

### Distribuir el espacio disponible alrededor de los elementos

#### Versión con css
```markup
<!-- version con css -->
<div class="main-distribute">
<div>1</div>
<div>2</div>
<div>3</div>
</div>
```





#### Versión con Sass

```scss
// version con Sass
.container { @include mainDistribute }
```

### Alinear los elementos al inicio del eje
#### Versión con css

```markup
<!-- version con css -->
<div class="main-start">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass

```scss
// version con Sass
.container { @include mainStart }
```

### Alinear los elementos al centro del eje
#### Versión con css

```markup
<!-- version con css -->
<div class="main-center">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass
:markdown-it

```scss
// version con Sass
.container { @include mainCenter }
```
### Alinea los elementos al final del eje
#### Versión con css

```markup
<!-- version con css -->
<div class="main-end">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass

```scss
// version con Sass
.container { @include mainEnd }
```
## Alineaciones en el eje secundario
### Al inicio del eje secundario
#### Versión con css

```markup
<div class="cross-start">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass

```scss
// version con Sass
.container { @include crossStart }
```
### Al centro del eje secundario
##### Versión con css

```markup
<!-- version con css -->
<div class="cross-center">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass

```scss
// version con Sass
.container { @include crossCenter }
```
### Al final del eje secundario
##### Versión con css

```markup
<!-- version con css -->
<div class="cross-end">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass

```scss
// version con Sass
.container { @include crossEnd }
```
## Combinar alineaciones en ambos ejes
Puede combinar alineaciones para el eje principal y secundario
#### Versión con css

```markup
<!-- version con css -->
<div class="main-center cross-center">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass

```scss
// version con Sass
.container {
  @include mainCenter;
  @include crossCenter;
}
```
## Orientación de los ejes
### Reversa horizontal
#### Versión con css

```markup
<!-- version con css -->
<div class="flex-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass

```scss
// version con Sass
.container { @include flexReverse }
```

### En columna (de arriba hacia abajo)
#### Versión con css

```markup
<!-- version con css -->
<div class="flex-column">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```
#### Versión con Sass

```scss
//version con Sass
.container { @include flexReverse }
```

### Columna en reversa (de abajo hacia arriba)
#### Versión con css

```markup
<!-- version con css -->
<div class="flex-column-reverse">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

#### Versión con Sass
```scss
// version con Sass
.container { @include flexColumnReverse }
```
## Centrado absoluto
El centrado absoluto se aplica a un container que tiene un solo hijo, el cual puede ser solo texto o un elemento html

#### Versión con css
```markup
<!-- version con css -->
<div class="flex-center">
  <div>1</div>
</div>
```
#### Versión con Sass
```scss
// version con Sass
.container { @include flexCenter }
```

## Orden de elementos (solo CSS)
A través de clases html con el formato `bp-order-n` siendo `bp` un breakpoint válido de ed-grid, y `n` un número entre 1 y 10 se puede controlar la aparicion de los elementos en el navegador. Recuerde que todos los elementos tienen por defecto el valor 0 para la propiedad `order`.

Ejemplo
```markup
<div class="container">
  <div class="m-order-2">1</div>
  <div class="m-order-1">2</div>
  <div>3</div>
</div>
```
Esta característica no esta disponible para Sass porque en Sass basta escribir una linea de código en la media query requerida. Escribir los mixins consume más código que tan solo escribir manualmente el orden cuando sea necesario.
