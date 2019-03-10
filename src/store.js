import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js'

Vue.use(Vuex)
let api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/kenny/bugs'
})
export default new Vuex.Store({
  state: {
    bugs: [],
    bug: {}
  },
  mutations: {
    setBugs(state, data) {
      state.bugs = data
    },
    activeBug(state, data) {
      state.bug = data
    }
  },
  actions: {
    createBug({ commit, dispatch }, payload) {
      api.post('', payload)
        .then(res => {
          console.log(res)
          dispatch('getAllBugs')
        })
    },
    getAllBugs({ commit, dispatch }) {
      api.get('')
        .then(res => {
          console.log(res)
          commit('setBugs', res.data.results)
        })
    },
    getBug({ commit, dispatch }, payload) {
      api.get('', payload).then(res => {
        console.log(res)
        debugger
        commit('activeBug', payload)
      })
    }
  }
})
