const remUnit = 100
const setViewport = () => {
  const viewWidth = window.innerWidth
  const baseWidth = 375
  document.querySelector('html').style.fontSize = viewWidth / baseWidth * remUnit + 'px'
}
setViewport()

window.onresize = () => {
  setViewport()
}
