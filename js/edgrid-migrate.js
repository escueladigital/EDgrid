(function(d){
  // parejas de selectores
  let selectors = {
    grupo: ['grupo','ed-container'],
    caja: ['caja','ed-item'],
    total: ['total', 'full'],
  };

  // función para añadir nuevo selector
  let addNewSelector = function(selector, newSelector) {
    let elements = d.querySelectorAll(`.${selector}`);
    let elementsLength = elements.length;
    while (elementsLength--) {
      elements[elementsLength].classList.add(newSelector)
    }
  };

  // Recorrer el objeto selector para añadir las clases nuevas
  for (let selector in selectors) {
    addNewSelector(selectors[selector][0],selectors[selector][1])
  }
})(document);


(function (d) {
  let oldSizes = {
    'base-'        : 's-',
    'movil-'       : 's-',
    'tablet-'      : 'm-',
    'web-'         : 'l-',
    'hd'           : 'xl-',
    'hasta-tablet' : 'to-m',
    'hasta-web'    : 'to-l',
    'hasta-hd'     : 'to-xl',
    'desde-tablet' : 'from-m',
    'desde-web'    : 'from-l',
    'desde-hd'     : 'from-hd'
  };

  // función para añadir las nuevas clases
  let addNewClasses = function(oldSize,newSize){
    // nodeList de elementos con las clases antiguas
    let items = d.querySelectorAll(`[class*="${oldSize}"]`);
    let itemsArray = Array.prototype.slice.apply(items);
    // array en el que se guardaran las clases antiguas
    let oldClasses = [];
    // array en el que se guardarán las nuevas clases
    let newClasses;
    let itemsL = items.length;

    // Ciclo para extraer las clases antiguas
    for (let i = 0; i < itemsL; i++) {
      // obtener las clases de cada elemento
      let thisClasses = items[i].classList;
      let classesArray = Array.prototype.slice.apply(thisClasses);

      // recuperar la clase antigua
      let extractedClasses = classesArray.filter(function(classItem){
        return classItem.indexOf(oldSize) == 0;
      });

      // Añadir la clase antigua al array oldClasses
      oldClasses.push(extractedClasses[0]);
    }

    // Crear un nuevo array con las nuevas clases
    newClasses = oldClasses.map(function(classItem){
      return classItem.replace(oldSize,newSize)
    });

    // Añadir las nuevas clases a los items
    itemsArray.forEach(function(size, index){
      size.classList.add(newClasses[index]);
    });
  };

  // añadir las nuevas clases a los items
  for (let oldSize in oldSizes) {
    addNewClasses(oldSize,oldSizes[oldSize])
  }
})(document);
