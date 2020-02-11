
const user = {
  state: {
    name: 'test',
    id: 1
  },

  getters: {
    name: state => state.name
  },

  mutations: {
    setName: (state, name) => {
      state.name = name
    },
    setId: (state, id) => {
      state.id = id
    }
  },
  actions: {
    logOut({commit, reqDadat}) {
      return new Promise((resolve, reject) => {
        commit('setName', 'test1')
        resolve()
      })
    }
  }
}

export default user;