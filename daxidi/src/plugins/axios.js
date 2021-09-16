import axios from 'axios'
var instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/be69f84e36887846546f1c11ebc62961/list'
})
instance.interceptors.response.use(function(response) {
  return response.data
})
export default {
  install: (Vue,options) => {
    Vue.prototype.$axios = {
      ...instance,
      get: (url,params) => {
        return instance(url,{params: params})
      }
    }
  }
}