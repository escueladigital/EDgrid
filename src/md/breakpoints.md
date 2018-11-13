# Breakpoints
<!-- TOC -->

- [Mobile first](#mobile-first)
- [Cambiar los breakpoints (Sass)](#cambiar-los-breakpoints-sass)

<!-- /TOC -->

---

Los breakpoints son los puntos de quiebre donde el layout cambia. Estan definidos en el siguiente Sass map:

```scss
$breakpoints : (
    s  : 0,     // Todos los tamaños
    m  : 40em,  // ~ 640px
    lg : 64em,  // ~ 1024px
    xl : 90em   // ~1440px
) !default;
```

\* En versiones anteriores se usaba el breakpoint `l` que ahora se ha cambiado a `lg` para evitar confusión con la nomenclatura de SMACSS en la que `l` no significa `large` sino `layout`. Sin embargo, por compatibilidad hacia atrás, EDgrid reconoce aun el breakpoint `l` por lo que su proyecto no se verá afectado. Aunque recomendamos dejar de usarlo en el futuro.

<a id="markdown-mobile-first" name="mobile-first"></a>
## Mobile first

EDgrid usa el patrón **Mobile first**, lo que significa que el estilo definido en un breakpoint será heredado en breakpoints superiores salvo que sea sobreescrito. En el siguiente ejemplo, el elemento medirá 50% de ancho (`s-50`) en todos los tamaños ya que fue definido en el breakpoint menor y no ha sido sobreescrito.

```html
<article class="s-50">Hola mundo</article>
```

En cambio, en este ejemplo, medirá 50% en los breakpoints `s` y `m` pero en `l` y `xl` medirá 75%.

```html
<article class="s-50 lg-75">Hola mundo</article>
```

<a id="markdown-cambiar-los-breakpoints-sass" name="cambiar-los-breakpoints-sass"></a>
## Cambiar los breakpoints (Sass)

Si es usuario avanzado puede cambiar los breakpoints por los suyos. Puede cambiar el tamaño, el nombre o la cantidad.  Solo debe declarar el Sass map `$breakpoints` antes de importar EDgrid.

```scss
$breakpoints : (
small   : 0,
medium  : 45em,
large   : 80em,
xlarge  : 90em,
xxlarge : 120em
)

@import "~ed-grid/ed-grid";
```
