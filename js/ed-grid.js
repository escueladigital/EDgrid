(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.edgrid = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _migrate = require('./migrate');

var _migrate2 = _interopRequireDefault(_migrate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { menu: _menu2.default, migrate: _migrate2.default };
module.exports = exports['default'];

},{"./menu":2,"./migrate":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (navId, menuId) {
  var nav = document.getElementById(navId),
      menu = document.getElementById(menuId),
      toggleButton = document.getElementById(navId + '-toggle');

  function showNav() {
    nav.classList.toggle('show-menu');
  }

  function showSubMenu(e) {
    if (e.target.classList.contains('expand-submenu')) {
      e.preventDefault();
      e.target.classList.toggle('active');
      e.target.previousElementSibling.classList.toggle('show-submenu');
    }
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
    var menuItems = menu.querySelectorAll('li');
    var menuItemsLength = menuItems.length;

    // show submenus
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
  } else {
    console.error('Not found ' + menuId + ' Id');
  }
};

module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

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
  '(\\d{1,3}|\\d-\\d)?',

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
};

module.exports = exports['default'];

},{}]},{},[1])(1)
});


//# sourceMappingURL=ed-grid.js.map
