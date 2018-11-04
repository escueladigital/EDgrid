import { $, each } from './utils'

export default () => {

  // Clases antiguas (como clave) y nuevas (como valor).
  const classes = {
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

  // Obtenemos las clases antiguas.
  const oldClasses = Object.keys(classes);

  // Expresión regular que encuentra los selectores antiguos
  // a partir del className de un elemento.
  // Creada a partir de: http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript#answer-196038
  const OLD_SELECTORS_REGEX = new RegExp([

    // Coincide con el inicio del className o
    // con un espacio que precede al selector antiguo.
    '(^|\\s)',

    // Conicide con uno de todos los selectores.
    `(${oldClasses.join('|')})`,

    // Coincide con el tamaño asignado por el selector
    // ej: base-50, coincidiría con 50.
    '(\\d{1,3}|\\d-\\d)?',

    // Coincide con el selector antiguo que este seguido
    // por un espacio o con el final del className.
    '(?!\\S)'
  ].join(''), 'g');

  // Creamos un nuevo arreglo con los selectores de atributo
  // y de clase, resultantes de las clases antiguas.
  const oldSelectors = oldClasses.map(oldClass => {

    // Verificamos si se necesita un selector de atributo.
    // Si se necesita, lo retornamos con este.
    if (oldClass.endsWith('-')) {
      return `[class*="${oldClass}"]`
    }

    // De lo contrario, lo retornamos como selector de clase.
    return `.${oldClass}`
  })

  // Iteramos todos los elementos para añadir las nuevas clases.
  each($(oldSelectors.join()), element => {
    let match
    let newClasses = ''

    // Iteramos todas las coincidencias.
    while (match = OLD_SELECTORS_REGEX.exec(element.className)) {
      newClasses += ` ${classes[match[2]] + (match[3] || '')}`
    }

    // Añadimos las nuevas clases.
    element.className += newClasses
  })
}
