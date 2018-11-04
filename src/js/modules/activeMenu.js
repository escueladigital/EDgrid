const activeMenu = menuId => {
  const menu = document.getElementById(menuId)
  if(!menu) return
  const links = [...menu.querySelectorAll('a')]
  if (!links) return
  links.map( link => {
    const url = document.location.href
    if(link.href === url || link.href === url.slice(0,-1)) link.classList.add('active')
  })
}

export default activeMenu
