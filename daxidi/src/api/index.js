import axios from 'axios'
// 需要的时候用
/* axios.interceptors.response.use(function(response) {
  //对响应数据做点什么
  return response.data
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
}
) */
const api = {
  home: () => axios.get('/api/home'),
  product: {
    //侧边列表
    category: () => axios.get('/api/product/category'),
    // 商品列表
    list: (params) => axios.get('/api/product', {params}),
    // 详情
    detail: (id) => axios.get(`/api/product/${id}`)
  },
  // 用户登录
  user: {
    code: (params) => axios.get('/api/message/code',{params}),
    login: (params) => axios.post('/api/user/login',params),
    info: () => axios.get('/api/user'),
  },
  // 购买商品
  car: {
    add: (params) => axios.post('/api/car/add',params),
    list: () => axios.get('/api/car'),
    update: (params) => axios.put('/api/car/', params)
  }
}

export default api
/* export default (Vue) => {
  Vue.prototype.$api = api
} */