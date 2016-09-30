let edMenu = function(navId,menuId) {
           let nav = document.getElementById(navId),
              menu = document.getElementById(menuId),
      toggleButton = document.getElementById(`${navId}-toggle`);
           console.log(menu);

  function showNav() {
    nav.classList.toggle('show-menu');
  }

  // si el nav y toggle existen mostrar u ocultar menu
  if (nav) {
    if (toggleButton) {
      toggleButton.addEventListener('click', showNav);
    } else {
      console.error(`Not found ${navId}-toggle Id`)
    }
  } else {
    console.error(`Not found ${navId} Id`)
  }

  if (menu) {
    // Detectar submenus
    let menuItems = menu.querySelectorAll('li');
    let menuItemsLength = menuItems.length;

    function showSubMenu(e) {
      e.preventDefault();
      if (e.target.classList.contains('expand-submenu')) {
        e.target.classList.toggle('active');
        e.target.previousElementSibling.classList.toggle('show-submenu');
      }
    }

    menu.addEventListener('click', (e) => {
      showSubMenu(e);
    });

    while (menuItemsLength--) {
      let menuItem = menuItems[menuItemsLength];
      // Detectar si un item es padre de un submenu
      if (menuItem.querySelector('ul') != null) {
        menuItem.classList.add('parent-submenu');

        //Crear toggle button para submenus
        let expandSubmenu = document.createElement('div');
        expandSubmenu.classList.add('expand-submenu');
        menuItem.appendChild(expandSubmenu);
      }
    }
  } else {
    console.error(`Not found ${menuId} Id`)
  }
};


