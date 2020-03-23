<template>
  <div class="container-lg project-view">
    <div class="mb-3 d-flex align-items-center">
      <h3 class="mr-auto">{{ project.name }}</h3>
      <button class="btn btn-outline-primary">New Task</button>
    </div>
    <loading-text v-if="!projectsLoaded"></loading-text>
    <div v-else class="row">
      <div class="col-4">
        <h5 class="text-primary d-flex justify-content-center">ToDo</h5>

        <b-list-group>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Morbi leo risus</b-list-group-item>
          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>

      </div>
      <div class="col-4">
        <h5 class="text-primary d-flex justify-content-center">In Progress</h5>

        <b-list-group>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        </b-list-group>

      </div>
      <div class="col-4">
        <h5 class="text-primary d-flex justify-content-center">Done</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import LoadingText from '@/components/LoadingText.vue';

export default {
  name: 'Project',

  components: {
    LoadingText,
  },

  data() {
    return {
      project: {},
    };
  },

  computed: {
    ...mapState(['projectsLoaded', 'projects']),
  },

  methods: {
    ...mapActions(['getProjects']),

    init() {
      const projectId = parseInt(this.$route.params.id, 10);
      this.project = this.projects.find((p) => p.id === projectId);
    },
  },

  created() {
    if (!this.projectsLoaded) {
      this.getProjects()
        .then(() => this.init())
        .catch(() => console.error('Something went wrong getting projects.'));
    }
    else {
      this.init();
    }
  },
};
</script>

<style scoped>
.project-view {
  padding-top: 8px;
}
.pointer {
  cursor: pointer;
}
.new-card {
  border-style: dashed;
  border-width: .2rem;
}
</style>
