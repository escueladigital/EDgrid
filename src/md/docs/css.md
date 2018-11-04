# CSS
La principal diferencia de ed-grid 2 con su versión anterior es que podemos decidir qué componentes compilar a CSS. En la versión 1, todo el CSS era compilado generando código innecesario.
Si usted desea puede trabajar solo con la versión CSS de ed-grid 2, y añadir clases al código HTML para construir su layout según el [flujo de trabajo recomendado](flujo.html).
El CSS de ed-grid 2 se clasifica en 2 grupos:
* **cssCore**
  - offset
  - flexbox
  - grid
  - [devMode](modo-dev) Genera el modo dev para visualizar la construcción del layout
  - botones
  - ed-menu
- **cssHelpers**
    - [coreGrid](flujo.html) el núcleo de ed-grid 2 con los tamaños y los breakpoints
    - [helpers](helpers.html) ayudas comunes al trabajo
    - [flexCssHelpers](flexbox.html) alineación en ejes, orientación y centrado absoluto sin tomar en cuenta el breakpoint (se aplica a todos)
      - .main-justify  
      - .main-distribute
      - .main-center
      - .main-start
      - .main-end
      - .cross-start
      - .cross-center
      - .cross-end
      - .flex-reverse
      - .flex-column
      - .flex-column-reverse 
      - .abcenter
    - [visibility](visibilidad.html) clases para visibilidad
