const activeMenu = menuId => {
  const menu = document.getElementById(menuId)
  const links = [...menu.querySelectorAll('a')]
  links.map( link => {
    const url = document.location.href
    if(link.href === url || link.href === url.slice(0,-1)) link.classList.add('active')
  })
}

export default activeMenu
