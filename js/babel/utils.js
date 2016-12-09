/**
 * Alias del método `querySelectorAll`
 *
 * @param {String} selector
 * @param {Document|HTMLElement} context
 *
 * @return {NodeList|HTMLElement}
 *
 * @private
 */
export function $ (selector, context = document) {
  //if (/^#[\w-]+$/.test(selector)) {
    //return context.getElementById(selector.slice(1))
  //}

  //return context.querySelectorAll(selector)

return /^#[\w-]+$/.test(selector)
      ? context.getElementById(selector.slice(1))
      : context.querySelectorAll(selector);
}

/**
 * Recorre todos los elementos de un NodeList o HTMLCollection.
 *
 * @param {NodeList|HTMLCollection} elements
 * @param {Function} callback
 *
 * @return void
 *
 * @private
 */
export function each (elements, callback) {
  const { length } = elements;

  for (let i = 0; i < length; ++i) {
    callback(elements[i], i, elements)
  }
}
