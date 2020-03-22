import Vue from 'vue';
import Vuex from 'vuex';
import projects from '../api';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    projectsLoaded: false,
    projects: [],
  },

  getters: {
  },

  mutations: {
    setProjects: (state, payload) => {
      if (payload === null) {
        state.projects = [];
        state.projectsLoaded = false;
      }
      else {
        state.projects = payload;
        state.projectsLoaded = true;
      }
    },
  },

  actions: {
    getProjects: async ({ commit }) => {
      try {
        const response = await projects.get();
        commit('setProjects', response.data);
      }
      catch (err) {
        // console.error(err);
        commit('setProjects', null);
        throw new Error(err);
      }
    },
  },

});
