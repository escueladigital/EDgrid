# Layout vertical
EDgrid no soluciona solamente los layouts horizontales usando columnas con CSS Grid y Flexbox, además ayuda a tener layouts verticales armoniosos y bien distribuidos.

Para seguir buenas prácticas, las clases de layout comienzan con `l-`. Además todos los espacios verticales se crean solamente con `margin-bottom`. 

## Secciones

En EDgrid existen tres tipos de secciones que se indican con las siguientes clases.
    
* `l-block` Bloques internos como widgets, cards, etc.
* `l-section` Sección que separa un bloque de contenido. Por ejemplo, secciones de una landing page
* `l-big-section` Igual que el anterior pero cuando se quiere dar una separación mayor. 
 
## Anular espaciado entre secciones

Si en algun caso desea anular el espaciado de una seccion con la anterior. Use las siguientes clases:

* `cancel-l-block` Cancela margin-bottom de hermano anterior `l-block`
* `cancel-l-section` Cancela margin-bottom de hermano anterior `l-section`
* `cancel-l-big-section` Cancela margin-bottom de hermano anterior `l-big-section`

## Espaciado vertical entre contenido

EDgrid incluye espaciado vertical armonioso entre contenido (parrafos, titulos, listas, etc). No tiene que hacer nada. Solo escribir su contenido.

### Titulos


```scss
:root {
  --vertical-content-space : 1rem;
}
// Encabezados
h1, h2, h3, h4, h5, h6 {
  margin-top    : 0;
  margin-bottom : var(--vertical-content-space);
}

h1 {
  margin-bottom : calc(var(--vertical-content-space) * 1.5) !important;
}
```
    
### Contenido

La norma recomienda encerrar cada sección en una etiqueta section. Pero en la práctica es dificil conseguirlo siempre así que la presenciad e un titulo indica el cambio de sección y por eso se le agrega una separación vertical mayor con el hermano anterior.

```scss
:root {
  --vertical-content-space : 1rem;
}

p,
video,
blockquote,
article,
section,
form,
figure,
iframe,
ul,
ol,
pre,
hr,
dl,
address {
  margin-top    : 0;
  margin-bottom : var(--vertical-content-space);

  + h2 {
    padding-top : calc(var(--vertical-content-space) * 1.5);
  }

  + h3 {
    padding-top : var(--vertical-content-space);
  }
}
```

## Anular separaciones para últimos elementos

Cuando hay varios elementos, a veces no queremos que el último conserve su separación. 

```scss
// Eliminar separación horizontal
.l-v-last {
  margin-bottom : 0;
}

// Eliminar separación vertical
.l-h-last {
  margin-right : 0;
}

// Eliminar separaciones horizontal y vertical a la vez
.l-last {
  margin-right  : 0;
  margin-bottom : 0;
}

```
