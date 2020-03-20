import Vue from 'vue';
import Vuex from 'vuex';
import projects from '../api';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        projects: {
            loaded: false,
            data: [],
        },
    },

    getters: {
    },

    mutations: {
        setProjects: (state, payload) => {
            if (payload === null) {
                state.projects.data = [];
                state.projects.loaded = false;
            }
            else {
                state.projects.data = payload;
                state.projects.loaded = true;
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
