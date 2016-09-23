// todo: cambiar las clases movil, tablet, web, hd a s, m, l, xl

var selectors = {
  grupo: ['grupo','edc'],
  caja: ['caja','edi'],
  edContainer: ['ed-container','edc'],
  edItem: ['ed-item','edi'],
  total: ['total', 'full']
};

var addNewSelector = function(selector, newSelector) {
  var elements = document.querySelectorAll(`.${selector}`);
  var elementsLength = elements.length;
  while (elementsLength--) {
    elements[elementsLength].classList.add(newSelector)
  }
};

for (var selector in selectors) {
  addNewSelector(selectors[selector][0],selectors[selector][1])
}
