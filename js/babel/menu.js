import { $, each } from './utils'

//TODO: Add null pointer error checked.
export default (navId, menuId) => {
  let nav = $(`#${navId}`),
    menu = $(`#${menuId}`),
    toggleButton = $(`#${navId}-toggle`);

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
      console.error(`Not found ${navId}-toggle Id`)
    }
  } else {
    console.error(`Not found ${navId} Id`)
  }


  if (menu) {
    // show submenus
    menu.addEventListener('click', showSubMenu);
    //
    // while (menuItemsLength--) {
    //   let menuItem = menuItems[menuItemsLength];
    //   // Detectar si un item es padre de un submenu
    //   if (menuItem.querySelector('ul') != null) {
    //     menuItem.classList.add('parent-submenu');
    //
    //
    //   }
    // }

    each($('li', menu) /* menuItems */, menuItem => {
      // Detectar si un item es padre de un submenu
      if (menuItem.querySelector('ul') != null) {
        menuItem.classList.add('parent-submenu');

        //Crear toggle button para submenus
        let expandSubmenu = document.createElement('div');
        expandSubmenu.classList.add('expand-submenu');
        menuItem.appendChild(expandSubmenu);
      }
    })
  } else {
    console.error(`Not found ${menuId} Id`)
  }
}
