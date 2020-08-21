# Menus 
Con EDgrid puede crear menus responsive fácilmente. Basta con crear una lista `ul` y los enlaces dentro de cada `li`.
## Uso con clases CSS

Añada la clase `ed-menu al` `ul` de nivel superior.

Añada la clase `n-horizontal siendo` `n` el breakpoint (`s,m,l,xl`) desde el cual el menú será horizontal

Añada alguna de las tres clases para cambiar el estilo: `default` `nav-bar` `button-bar`
```markup
<ul class="ed-menu l-horizontal button-bar">
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>
```

<ul class="ed-menu l-horizontal button-bar">
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>

## Uso con Sass
Si va a usar Sass, el marcado HTML debe ser el mismo.

Incluya el mixin `edMenu($bp,$style)` al `ul` de nivel superior. Los parámetros son:

* `$bp` breakpoint a partir del cual el menu será horizontal. Puede ser un breakpoint del core de ed-grid (`s,m,l,xl`) o un breakpoint válido en `px`, `em` o `rem`.
* `$style` (opcional) puede ser `default`, `navBar` o `buttonBar`

```scss
.main-menu {
  @include edMenu(l,navBar)
}
```

## Trabajo en desarrollo
Este componente no está terminado y estos son algunos de los pendientes

* En la version CSS, debería funcionar sin tener que añadir una clase para horizontal (en caso se requiera siempre vertical)
* Scripts JS para activar y desactivar el menú en tamaños moviles
* Scripts JS para activar y desactivar subniveles en tamaños moviles
* Definir la personalizacion de colores para menu, items y links.
