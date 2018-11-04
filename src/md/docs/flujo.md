# Flujo de trabajo (CSS/Sass)
## Sass o CSS
Puede usar 
**ed-grid** con CSS (añadiendo el archivo css e insertando clases en html) o con Sass (mixins preconstruidos). Se recomienda Sass para aprovechar todo el potencial de 
**ed-grid**. A lo largo de esta documentación se indicará si nos referimos al trabajo con Sass o CSS.
## Flujo de trabajo recomendado (Sass y CSS)
- **ed-grid** permite construir layouts con facilidad a través de dos elementos: un contenedor
`<div class="ed-container"></div>` y varios items `<div class="ed-item"></div>`
- **ed-grid** no usa filas y columnas porque estas no existen. Un contenedor no es una fila porque los items dentro del contenedor pueden ordenarse en varias filas. Y los items no son columnas porque sus dimensiones son ajustables según el requerimiento del proyecto.
- Se recomienda usar las clases `ed-container` para el contenedor y `ed-item` para los items, pero podria usar las clases que desee modificándolas desde Sass.
- Los `ed-item` debe ser hijos directos de un `ed-container`
## Para anidaciones de containers y items tenga en cuenta:
**Mal** (un ed-container dentro de un ed-item):

```markup
<div class="ed-container">
  <div class="ed-item">
    <div class="ed-container">
      <div class="ed-item"></div>
      <div class="ed-item"></div>
    </div>
  </div>
  <div class="ed-item"></div>
</div>
```

**Bien** (un ed-container es a la vez un ed-item)

```markup
<div class="ed-container">
  <div class="ed-item ed-container">
    <div class="ed-item"></div>
      <div class="ed-item"></div>
    </div>
  <div class="ed-item"></div>
</div>
```

* Adicionalmente deben indicarse los anchos de los items, usando clases con el formato `x-n` donde `x` es el breakpoint y `n` el ancho en porcentaje.
* Los tamaños son 4: `s` (small: 320px), `m` (medium: 640px), `l` (large: 1024px), `xl` (xlarge: 1440px)
* Los anchos pueden ser de dos tipos: multiplos de 5 (5,10,15,20,25...) o fracciones de 3, 6 u 8 (1-3, 2-3, 3-3,1-6,2-6...)
* De esta manera, el ed-item `<div class="ed-item s-50 m-1-3 l-75 xl-50"></div>` medirá 50% de ancho desde los 320px, 33.33% (un tercio) a partir de 640px, 75% a partir de 1024px y 50% a partir de 1440px
* No es necesario indicar el ancho en cada tamaño, pues los tamaños superiores heredan el ancho del ultimo tamaño inferior declarado
* Si no se especifica el ancho, el ed-item tendrá 100% de ancho.
* Los containers tienen un ancho predeterminado del 100% aunque no crecerán a más de 1200px de ancho. Si desea un container forzado a 100% del viewport, añada la clase `full`
## Importante
* El flujo de trabajo indicado anteriormente (con clases para el container, items y tamaños) es el que se recomienda. Incluso si se va a trabajar con Sass.
* Sin embargo, si quiere personalizarlo al extremo con Sass, podría definir sus propios tamaños y clases para containers y items.
