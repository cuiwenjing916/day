export default (Vue) => {
  const context = require.context('@/components', true, /^\.\/(\w*\/)+index\.(vue|js)$/)
  context.keys().forEach((module) => {
    // var name = 'Al' + module.replace(/\.\/(\w*)\/index\.(vue|js)/, '$1')
    // var component = context(module)
    // Vue.component(name, component.default)
    var component = context(module)
    if (component.name) {
      Vue.component(`al-${component.name}`,component.default)
    } else if (component.install) {
      Vue.use(component)
    } else {
      for (const key in component) {
        const item = component[key]
        Vue.component(`al-${item.name}`,item)
      }
    }
  })
}
