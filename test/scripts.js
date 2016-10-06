'use strict';

var edMenu = function edMenu(navId, menuId) {
  var nav = document.getElementById(navId),
      menu = document.getElementById(menuId),
      toggleButton = document.getElementById(navId + '-toggle');
  console.log(menu);

  function showNav() {
    nav.classList.toggle('show-menu');
  }

  // si el nav y toggle existen mostrar u ocultar menu
  if (nav) {
    if (toggleButton) {
      toggleButton.addEventListener('click', showNav);
    } else {
      console.error('Not found ' + navId + '-toggle Id');
    }
  } else {
    console.error('Not found ' + navId + ' Id');
  }

  if (menu) {
    (function () {
      var showSubMenu = function showSubMenu(e) {
        if (e.target.classList.contains('expand-submenu')) {
          e.preventDefault();
          e.target.classList.toggle('active');
          e.target.previousElementSibling.classList.toggle('show-submenu');
        }
      };

      // Detectar submenus
      var menuItems = menu.querySelectorAll('li');
      var menuItemsLength = menuItems.length;

      menu.addEventListener('click', function (e) {
        showSubMenu(e);
      });

      while (menuItemsLength--) {
        var menuItem = menuItems[menuItemsLength];
        // Detectar si un item es padre de un submenu
        if (menuItem.querySelector('ul') != null) {
          menuItem.classList.add('parent-submenu');

          //Crear toggle button para submenus
          var expandSubmenu = document.createElement('div');
          expandSubmenu.classList.add('expand-submenu');
          menuItem.appendChild(expandSubmenu);
        }
      }
    })();
  } else {
    console.error('Not found ' + menuId + ' Id');
  }
};
'use strict';

;(function (window, document) {

  // Selectores de las clases antiguas.
  var selectors = {
    grupo: 'ed-container',
    caja: 'ed-item',
    total: 'full',
    'hasta-tablet': 'to-m',
    'hasta-web': 'to-l',
    'hasta-hd': 'to-xl',
    'desde-tablet': 'from-m',
    'desde-web': 'from-l',
    'desde-hd': 'from-xl',
    'base-': 's-',
    'movil-': 's-',
    'tablet-': 'm-',
    'web-': 'l-',
    'hd-': 'xl-'
  };

  // Obtenemos los selectores antiguos.
  var oldSelectors = Object.keys(selectors);

  // Expresión regular que encuentra los selectores antiguos
  // a partir del className de un elemento.
  // Creada a partir de: http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript#answer-196038
  var OLD_SELECTORS_REGEX = new RegExp([
  // Coincide con el inicio del className o
  // con un espacio que precede al selector antiguo.
  '(^|\\s)',

  // Conicide con uno de todos los selectores.
  '(' + oldSelectors.join('|') + ')',

  // Coincide con el tamaño asignado por el selector
  // ej: base-50, coincidiría con 50.
  '(\\d{1,3})?',

  // Coincide con el selector antiguo que este seguido
  // por un espacio o con el final del className.
  '(?!\\S)'].join(''), 'g');

  var i = oldSelectors.length;

  // Iteramos todos los selectores antiguos para reeemplazar
  // algunos que necesitan un selector de atributo, tales como:
  // base-, movil-, etc...
  while (i--) {
    var oldSelector = oldSelectors[i];

    // Verificamos si se necesita un selector de atributo,
    // sí se necesita, lo reasignamos con este
    if (oldSelector.endsWith('-')) {
      oldSelectors[i] = '[class*="' + oldSelector + '"]';

      // De lo contrario, lo reasignamos como selector de clase
    } else {
      oldSelectors[i] = '.' + oldSelector;
    }
  }

  /**
   * Agrega los nuevos selectores de clase
   *
   * @return void
   *
   * @private
   */
  function addNewSelectors() {
    var elements = document.querySelectorAll(oldSelectors.join());
    var elementsLen = elements.length;

    while (elementsLen--) {
      var element = elements[elementsLen];

      element.className = element.className
      // Agrega el nuevo selector al className del elemento con la clase antigua
      .replace(OLD_SELECTORS_REGEX, function (_) {
        var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var oldSelector = arguments[2];
        var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

        return space
        // Antiguo selector
        + oldSelector + size + ' '
        // Nuevo selector
        + selectors[oldSelector] + size;
      });
    }
  }

  addNewSelectors();
})(window, window.document);
//# sourceMappingURL=scripts.js.map
