import Vue from 'vue';
import Vuex from 'vuex';
import projects from './projects';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    projects,
    tasks,
  },

  state: {
  },

  getters: {
  },

  mutations: {
  },

  actions: {
  },

});
