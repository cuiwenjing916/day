import api from '@/api'
const user = {
  namespaced: true,
  state: {
    token: document.cookie.indexOf('token') !== -1,
    info: {}
  },
  getters: {},
  mutations: {
    SET_USER_INFO (state,payload) {
      state.info = payload
    },
    SET_USER_TOKEN (state,payload) {
      state.token = payload
    }
  },
  actions: {
    async login({ commit, dispatch},params) {
      await api.user.login(params)
      const token = document.cookie.indexOf('token') !== -1
      commit('SET_USER_TOKEN', token)
      dispatch('info')
    },
    async info ({ commit, state,dispatch}) {
      if (state.token) {
        const userInfo = await api.user.info()
        commit('SET_USER_INFO', userInfo)
        dispatch('car/fetchCarList',null, {root:true})
      }
    }
  }
}
export default user