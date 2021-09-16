import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 默认样式
import './static/reset.css'
import './static/iconfont/iconfont.css'
import './static/scss/base.scss'
import './utils/rem'
import './static/css/animated.css'

// 底部加载
import reachBottom from './mixins/reachBottom'

import axios from './plugins/axios'

import api from './api/index'

import autoInstallComponent from './plugins/autoInstallComponent';
import filters from './filters'
Vue.use(axios)
// Vue.use(axios2)
Vue.use(reachBottom)
Vue.use(autoInstallComponent)
Vue.config.productionTip = false
Vue.use(filters)
Vue.prototype.$api = api

import '../vue.config'
new Vue({
  router,
  store,
  data: {
    token: document.cookie.indexOf('token=') !== -1
  },
  render: h => h(App)
}).$mount('#app')
