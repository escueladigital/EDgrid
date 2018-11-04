# Helpers

Archivo `helpers.scss`

Los helpers son ayudas al trabajo a través de clases.

## Ancho de elementos

Puede usar las mismas clases de los `ed-item`.

```html
<div class="m-60">
<!--Este elemento mide 60% a partir de 640px-->
</div>
<div class="xl-1-3">
<!-- Este elemento mide 33.33% a partir de 1440px-->
</div>
```

## Alineación de elementos

Se aplica al mismo elemento que se quiere alinear las clases: `to-left`, `to-right`, `to-center`. Para que funcione debe especificar un ancho también.

```html
<div class="to-left s-50"><!-- Se envia a la izquierda 50% de ancho desde small--></div>
<div class="to-right m-80"><!-- Se envia a la derecha 80% de ancho desde medium --></div>
<div class="to-center l-75"><!-- Se envia al centro 75% de ancho desde large--></div>
```
## Alinear contenido
Use las clases `left`, `center`, `right` en el contenedor para que su contenido se centre.

```html
<h2 class="center">
Soy un título centrado
</h2>
```

## Limpiar floats

**Versión CSS**
```html
<!--Version css-->
<div class="clearfix"><!-- la clase clearfix limpia los floats--></div>
```

**Versión Sass**
```scss
// Uso con Sass
.selector { @include clearfix }
```

## Forzar ancho total

Hace que un elemento siempre mida el 100% del ancho disponible

**Versión CSS**

```html
<!-- Version CSS -->
<div class="full"><!-- Este elemento medirá 100% de ancho siempre --></div>
```

**Versión Sass**

```scss
// Uso con Sass
.selector { @include full }
```

## Hacer un elemento circular
Tenga en cuenta que si el alto y el ancho no son iguales, el elemento no será circular sino oval.

**Versión CSS**
```markup
<!-- Version CSS -->
<div class="circle"><!-- Este elemento será circular --></div>
```

**Versión Sass**
```scss
// Uso con Sass
.selector { @include circle }
```

## Controlar el padding

> Importante: si usa la versión con CSS Grid puede saltarse esta sección.

En EDgrid la separación entre los ed-item se genera a través de padding laterales (la separación entre uno y el siguiente es dos veces el tamaño del padding, por defecto 15px).

Puede ocurrir que en algunos casos complejos para forzar la alineación requiera añadir o quitar los padding por defecto a cualquier elemento (no solo ed-container y ed-item).


**Versión CSS**
```markup
<!-- Version CSS -->
<div class="padding"><!-- Añade un padding si el elemento no lo tenia --></div>
<div class="padding-2"><!-- Añade un padding doble --></div>
<div class="padding-3"><!-- Añade un padding triple --></div>
<div class="ed-container no-padding"><!-- Elimina el padding de todos sus ed-item internos--></div>
<div class="ed-item no-padding"><!-- Elimina el padding de solo este ed-item--></div>
```
**Versión Sass**
```scss
// Uso con Sass

// el mixin padding() recibe un número como parámetro
// este número puede ser 0 para eliminar el padding
.selector1 { @include padding(3) }

// El mixin noPaddingContainer tiene efecto
// solo aplicado a un .ed-container y elimina
// el padding de sus ed-item hijos
.selector2 { @include noPaddingContainer }
```
