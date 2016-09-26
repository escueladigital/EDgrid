var edMenu = function(menuId, direction) {
  var menu = document.getElementById(menuId),
    toggleButton = document.getElementById(`${menuId}-toggle`);
  function showMenu() {
    menu.classList.toggle('show-menu');
    console.log('click')
  }
  if (menu) {
    menu.classList.add(direction);
    if (toggleButton) {
      toggleButton.addEventListener('click', showMenu);
    } else {
      console.error(`Not found id ${menuId}-toggle`)
    }
  } else {
    console.error(`Not found id ${menuId}`)
  }
};


