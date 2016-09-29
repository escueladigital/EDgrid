(function(d){
  var selectors = {
    grupo: ['grupo','ed-container'],
    caja: ['caja','ed-item'],
    total: ['total', 'full'],
  };

  var addNewSelector = function(selector, newSelector) {
    var elements = d.querySelectorAll(`.${selector}`);
    var elementsLength = elements.length;
    while (elementsLength--) {
      elements[elementsLength].classList.add(newSelector)
    }
  };

  for (var selector in selectors) {
    addNewSelector(selectors[selector][0],selectors[selector][1])
  }
})(document);

(function (d) {
  var oldSizes = {
    'base-'  : 's-',
    'movil-' : 's-',
    'tablet-': 'm-',
    'web-'   : 'l-',
    'hd'     : 'xl-'
  };



  var addNewClasses = function(oldSize,newSize){
    var items = d.querySelectorAll(`[class*="${oldSize}"]`);
    var oldClasses = [];
    var newClasses;
    var itemsL = items.length;

    for (var i = 0; i < itemsL; i++) {
      var thisClasses = items[i].classList;
      var classesArray = Array.prototype.slice.apply(thisClasses);

      var extractedClasses = classesArray.filter(function(classItem){
        return classItem.indexOf(oldSize) == 0;
      });

      oldClasses.push(extractedClasses[0]);
    }

    newClasses = oldClasses.map(function(classItem){
      return classItem.replace(oldSize,newSize)
    });

    items.forEach(function(size, index){
      size.classList.add(newClasses[index]);
    });
  };

  for (var oldSize in oldSizes) {
    addNewClasses(oldSize,oldSizes[oldSize])
  }

})(document);
