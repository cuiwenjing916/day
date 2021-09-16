import formatPrice from './formatPrce';
export default (Vue) => {
  Vue.filter('formatPrice', formatPrice)
}