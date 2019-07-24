const getScrollBarWidth = () => window.innerWidth - document.documentElement.getBoundingClientRect().width

document.documentElement.style.setProperty('--scrollbar', `${getScrollBarWidth()}px`)

export { getScrollBarWidth }
