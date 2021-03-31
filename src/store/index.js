import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 0,
        title: "",
        bulletPoints: [],
        description: "",
        img: "",
        url: "",
        technologies: []
      },
    ]
  },
  mutations: {

  }
})
