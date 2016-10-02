;(function (window, document) {

  // Selectores de las clases antiguas.
  const selectors = {
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
  }

  // Obtenemos los selectores antiguos.
  const oldSelectors = Object.keys(selectors)

  // Expresión regular que encuentra los selectores antiguos
  // a partir del className de un elemento.
  // Creada a partir de: http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript#answer-196038
  const OLD_SELECTORS_REGEX = new RegExp([
    // Coincide con el inicio del className o
    // con un espacio que precede al selector antiguo.
    '(^|\\s)',

    // Conicide con uno de todos los selectores.
    `(${oldSelectors.join('|')})`,

    // Coincide con el tamaño asignado por el selector
    // ej: base-50, coincidiría con 50.
    '(\\d{1,3})?',

    // Coincide con el selector antiguo que este seguido
    // por un espacio o con el final del className.
    '(?!\\S)'
  ].join(''), 'g')

  let i = oldSelectors.length;

  // Iteramos todos los selectores antiguos para reeemplazar
  // algunos que necesitan un selector de atributo, tales como:
  // base-, movil-, etc...
  while (i--) {
    const oldSelector = oldSelectors[i]

    // Verificamos si se necesita un selector de atributo,
    // sí se necesita, lo reasignamos con este
    if (oldSelector.endsWith('-')) {
      oldSelectors[i] = `[class*="${oldSelector}"]`

    // De lo contrario, lo reasignamos como selector de clase
    } else {
      oldSelectors[i] = `.${oldSelector}`
    }
  }

  /**
   * Agrega los nuevos selectores de clase
   *
   * @return void
   *
   * @private
   */
  function addNewSelectors () {
    const elements = document.querySelectorAll(oldSelectors.join())
    let elementsLen = elements.length

    while (elementsLen--) {
      const element = elements[elementsLen]

      element.className = element.className
        // Agrega el nuevo selector al className del elemento con la clase antigua
        .replace(OLD_SELECTORS_REGEX, (_, space = '', oldSelector, size = '') => {
          return space
            // Antiguo selector
            + oldSelector + size
            + ' '
            // Nuevo selector
            + selectors[oldSelector] + size
        })
    }
  }

  addNewSelectors()

})(window, window.document)
