import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins : [vuexLocal.plugin],  
  state: {
    membre : false,
    token : false,
    membres : false,
    conversations : false
  },
  mutations: {
    setMembre(state, membre) {
      state.membre = membre
    },
    setMembres(state, membres) {
      state.membres = membres
    },
    setToken(state, token) {
      state.token = token
    },
    setConversations(state, conversations) {
      state.conversations = conversations
    },
    seDeconnecter(state){
      state.membre = false;
      state.token = false;
    }
  },
  getters: {
    getMembre(state){
      let fonction = (membre_id) => {
        return state.membres.find(membre => {
          return membre.id == membre_id;
        })
      }
      return fonction;
    }
  },
  actions: {
  },
  modules: {
  }
})
