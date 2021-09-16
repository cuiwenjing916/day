import api from '@/api'
const car = {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    carCount (state) {
      // console.log(state.list);
      return state.list.reduce((prev,item,index) => {
        if (item.active === '0') return prev
        return prev + item.num
      },0)
    }
  },
  mutations: {
    SET_CAR_LIST(state, payload) {
      state.list = payload
    }
  },
  actions: {
    async fetchCarList({ commit, dispatch }, params) {
      const res = await api.car.list()
      commit('SET_CAR_LIST', res.data.data)
    },
    async addCarProduct({ dispatch }, payload) {
      await api.car.add(payload)
      dispatch('fetchCarList')
    },
    async update({ dispatch},payload) {
      await api.car.update(payload)
      dispatch('fetchCarList')
    },
    // async update({ dispatch},payload) {
    //   const id = payload.id
    //   const query = {}
    //   for (var key in payload) {
    //     if (key !== 'id') {
    //       query[key] = payload[key]
    //     }
    //   }
    //   await api.car.update(id,query)
    //   dispatch('fetchCarList')
    // },
  }
}
export default car