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
        e.preventDefault();
        if (e.target.classList.contains('expand-submenu')) {
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

(function (d) {
  // parejas de selectores
  var selectors = {
    grupo: ['grupo', 'ed-container'],
    caja: ['caja', 'ed-item'],
    total: ['total', 'full']
  };

  // función para añadir nuevo selector
  var addNewSelector = function addNewSelector(selector, newSelector) {
    var elements = d.querySelectorAll('.' + selector);
    var elementsLength = elements.length;
    while (elementsLength--) {
      elements[elementsLength].classList.add(newSelector);
    }
  };

  // Recorrer el objeto selector para añadir las clases nuevas
  for (var selector in selectors) {
    addNewSelector(selectors[selector][0], selectors[selector][1]);
  }
})(document);

(function (d) {
  var oldSizes = {
    'base-': 's-',
    'movil-': 's-',
    'tablet-': 'm-',
    'web-': 'l-',
    'hd': 'xl-',
    'hasta-tablet': 'to-m',
    'hasta-web': 'to-l',
    'hasta-hd': 'to-xl',
    'desde-tablet': 'from-m',
    'desde-web': 'from-l',
    'desde-hd': 'from-hd'
  };

  // función para añadir las nuevas clases
  var addNewClasses = function addNewClasses(oldSize, newSize) {
    // nodeList de elementos con las clases antiguas
    var items = d.querySelectorAll('[class*="' + oldSize + '"]');
    var itemsArray = Array.prototype.slice.apply(items);
    // array en el que se guardaran las clases antiguas
    var oldClasses = [];
    // array en el que se guardarán las nuevas clases
    var newClasses = void 0;
    var itemsL = items.length;

    // Ciclo para extraer las clases antiguas
    for (var i = 0; i < itemsL; i++) {
      // obtener las clases de cada elemento
      var thisClasses = items[i].classList;
      var classesArray = Array.prototype.slice.apply(thisClasses);

      // recuperar la clase antigua
      var extractedClasses = classesArray.filter(function (classItem) {
        return classItem.indexOf(oldSize) == 0;
      });

      // Añadir la clase antigua al array oldClasses
      oldClasses.push(extractedClasses[0]);
    }

    // Crear un nuevo array con las nuevas clases
    newClasses = oldClasses.map(function (classItem) {
      return classItem.replace(oldSize, newSize);
    });

    // Añadir las nuevas clases a los items
    itemsArray.forEach(function (size, index) {
      size.classList.add(newClasses[index]);
    });
  };

  // añadir las nuevas clases a los items
  for (var oldSize in oldSizes) {
    addNewClasses(oldSize, oldSizes[oldSize]);
  }
})(document);
//# sourceMappingURL=scripts.js.map
