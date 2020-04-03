import projects from '../api';

export default {

  namespaced: true,

  state: {
    loaded: false,
    loading: false,
    creating: false,
    updating: false,
    removing: false,
    projects: [],
  },

  getters: {
    emptyProject: () => ({
      id: 0,
      name: 'New Project',
      description: '',
      imageUrl: '',
    }),
  },

  mutations: {

    loading: (state, payload) => {
      state.loading = !!payload;
    },

    creating: (state, payload) => {
      state.creating = !!payload;
    },

    updating: (state, payload) => {
      state.updating = !!payload;
    },

    removing: (state, payload) => {
      state.removing = !!payload;
    },

    set: (state, payload) => {
      if (payload === null) {
        state.projects = [];
        state.loaded = false;
      }
      else {
        state.projects = payload;
        state.loaded = true;
      }
    },

    add: (state, payload) => {
      state.projects.push(payload);
    },

    update: (state, payload) => {
      const projectIndex = state.projects.findIndex((p) => p.id === payload.id);
      state.projects[projectIndex].name = payload.name;
      state.projects[projectIndex].description = payload.description;
      state.projects[projectIndex].imageUrl = payload.imageUrl;
    },

    remove: (state, projectId) => {
      const projectIndex = state.projects.findIndex((p) => p.id === projectId);
      state.projects.splice(projectIndex, 1);
    },
  },

  actions: {
    get: async ({ commit }) => {
      commit('loading', true);
      try {
        const response = await projects.get();
        commit('set', response.data);
        commit('loading', false);
      }
      catch (err) {
        // console.error(err);
        commit('set', null);
        commit('loading', false);
        throw new Error(err);
      }
    },

    create: async ({ commit }, project) => {
      commit('creating', true);
      try {
        const response = await projects.post(project);
        commit('add', response.data);
        commit('creating', false);
      }
      catch (err) {
        // console.error(err);
        commit('creating', false);
        throw new Error(err);
      }
    },

    update: async ({ commit }, project) => {
      commit('updating', true);
      try {
        const response = await projects.put(project.id, project);
        commit('update', response.data);
        commit('updating', false);
      }
      catch (err) {
        // console.error(err);
        commit('updating', false);
        throw new Error(err);
      }
    },

    remove: async ({ commit }, projectId) => {
      commit('removing', true);
      try {
        const response = await projects.remove(projectId);
        commit('remove', response.data);
        commit('removing', false);
      }
      catch (err) {
        // console.error(err);
        commit('removing', false);
        throw new Error(err);
      }
    },

  },

};
