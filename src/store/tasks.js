import { tasks } from '../api';

export default {

  namespaced: true,

  state: {
    loaded: {},
    loading: {},
    creating: {},
    updating: {},
    removing: {},
    tasks: {},
  },

  getters: {
    emptyTask: () => ({
      id: 0,
      name: 'New Task',
      description: '',
      projectId: null,
    }),
  },

  mutations: {

    loading: (state, payload) => {
      state.loading[payload.projectId] = !!payload.data;
    },

    creating: (state, payload) => {
      state.creating[payload.projectId] = !!payload.data;
    },

    updating: (state, payload) => {
      state.updating[payload.projectId] = !!payload.data;
    },

    removing: (state, payload) => {
      state.removing[payload.projectId] = !!payload.data;
    },

    set: (state, payload) => {
      if (payload.projectId !== null) {
        state.tasks[payload.projectId] = payload.data;
        state.loaded[payload.projectId] = true;
      }
    },

    add: (state, payload) => {
      state.tasks[payload.projectId].push(payload.data);
    },

    update: (state, payload) => {
      const taskIndex = state.tasks[payload.projectId].findIndex((p) => p.id === payload.data.id);
      state.tasks[payload.projectId][taskIndex].name = payload.data.name;
      state.tasks[payload.projectId][taskIndex].description = payload.data.description;
    },

    remove: (state, payload) => {
      const taskIndex = state.tasks[payload.projectId].findIndex((p) => p.id === payload.taskId);
      state.tasks[payload.projectId].splice(taskIndex, 1);
    },
  },

  actions: {
    get: async ({ commit }, projectId) => {
      commit('loading', { projectId, data: true });
      try {
        const response = await tasks.get({ projectId });
        commit('set', { projectId, data: response.data });
        commit('loading', { projectId, data: false });
      }
      catch (err) {
        // console.error(err);
        commit('set', { projectId, data: null });
        commit('loading', { projectId, data: false });
        throw new Error(err);
      }
    },

    create: async ({ commit }, task) => {
      commit('creating', true);
      try {
        const response = await tasks.post(task);
        commit('add', response.data);
        commit('creating', false);
      }
      catch (err) {
        // console.error(err);
        commit('creating', false);
        throw new Error(err);
      }
    },

    update: async ({ commit }, task) => {
      commit('updating', true);
      try {
        const response = await tasks.put(task.id, task);
        commit('update', response.data);
        commit('updating', false);
      }
      catch (err) {
        // console.error(err);
        commit('updating', false);
        throw new Error(err);
      }
    },

    remove: async ({ commit }, taskId) => {
      commit('removing', true);
      try {
        const response = await tasks.remove(taskId);
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
