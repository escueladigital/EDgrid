# Prototipado avanzado

Ya vio qué es EDgrid y todo lo que es capaz de hacer, pero tal vez no sea suficiente en ciertos casos. ¿Qué tal si quiere utilizar otras propiedades que no tiene la librería?
¿O no quiere estar escribiendo CSS para cada componente y prefiere usar la numenclaruta de clases de EDgrid? Aquí es donde el prototipado avanzado entra en acción.

Utiliza el core de EDgrid para convetir cualquier propiedad en las nomenclaturas de la librería `breakpoint-propiedad`. Cabe recalcar que esta función sólo está disponible para la versión de EDgrid Sass.

## ¿Cómo funciona?

Para esto haremos uso del mixin `prototype()`, el cual podrá utilizarlo en cualquier lugar de su proyecto siempre y cuando EDgrid se haya importado antes. La sintaxis es la siguiente:

```scss
@include prototype($names, $property, $value);
/*
* $names - Lista de nombres que usaremos para nombrar nuestras clases.
*          Recorremos una lista por si queremos múltiples selectores con el mismo valor
*
* $property, $value - Propiedad CSS con su respectivo valor
*/
```

Ejemplo
```scss
@include prototype('cursor-pointer', cursor, pointer);
```

El resultado en CSS sería:

```css
.s-cursor-pointer {
  cursor: pointer;
}

@media screen and (min-width: 640px)
  .m-cursor-pointer {
    cursor: pointer;
  }
}

@media screen and (min-width: 1024px) {
  .lg-cursor-pointer {
    cursor: pointer;
  }
}

@media screen and (min-width: 1440px) {
  .xl-cursor-pointer {
    cursor: pointer;
  }
}
```

Si queremos múltiples clases con el mismo valor debemos pasar `$names` como si fuera una lista.

```scss
@include prototype(('color-red', 'red-color'), cursor, pointer);
```

```html
<!-- Ambas clases funcionan -->
<p class="s-color-red">Este es un párrafo de color rojo</p>
<p class="s-red-color">Y éste también lo está</p>
```

## Especifidad

Si quiere crear selectores más avanzados como juntar una clase con la nomenclatura que está creando o usar selectores como `+`, `>`, `~` entre muchos otros, no podrá hacerlo desde `$names`,
si no que deberá pasar un cuarto parámetro. Un ejemplo de esto es el componente `breakpoint-gap-numero` de EDgrid, el cuál solo funciona si el contenedor tiene la clase `ed-grid`.

```scss
@include prototype($names, $property, $value, $concat);
```

Ejemplos

```scss
// El elemento también tiene la clase .background
// .background.s-red
@include prototype('red', color, red, '.background');

// Algún elemento ancestro tiene la clase .background (nótese el espacio al final)
// .background .s-red
@include prototype('red', color, red, '.background ');

// Hijos directos de un elemento con la clase background
// .background > .s-red
@include prototype('red', color, red, '.background > ');
```

## Debug

El modo debug le permite ver en la terminal el CSS resultado (selector, propiedad, valor y mediaquery). Para activarlo debemos pasar un quinto parámetro en `true`.

```scss
@include prototype($names, $property, $value, $concat, $debug);
```

Ejemplo
```scss
@include prototype('red', color, red, '.background > ', true);

// Introduzca un string vacío si no necesita el cuarto parámetro
// Puede borrarlo una vez que desactive el debug
@include prototype('red', color, red, '', true);
```

