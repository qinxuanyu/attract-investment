import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,

  },
  mutations: {
    UPDATE_LOADING(state, data) {
      state.loading = data;
    },
    // uptaactiveName(state,data){
    //   state.activeName=data
    // }
  },
  actions: {

  }
})
