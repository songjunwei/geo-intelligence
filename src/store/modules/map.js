
const map = {
  state: {
    show: true
  },

  getters: {
    show: state => state.show
  },

  mutations: {
    changeShow: (state) => {
      state.show = !state.show
    }
  },
  actions: {
    setChangeShow: ({commit}) => {
      commit('changeShow')
    }
  }
}

export default map;