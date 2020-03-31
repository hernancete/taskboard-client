<template>
  <div class="container-lg project-view">
    <secondary-navbar :title="title">
      <button slot="left" type="button" class="btn btn-sm"
        @click="goHome">
        <b-icon-chevron-left font-scale="2"></b-icon-chevron-left>
      </button>
      <button slot="right" class="btn btn-outline-primary">New Task</button>
    </secondary-navbar>
    <loading-text v-if="!loaded || loading"></loading-text>
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
import { BIconChevronLeft } from 'bootstrap-vue';
import LoadingText from '@/components/LoadingText.vue';
import SecondaryNavbar from '@/components/SecondaryNavbar.vue';

export default {
  name: 'Project',

  components: {
    LoadingText,
    SecondaryNavbar,
    BIconChevronLeft,
  },

  data() {
    return {
      project: {},
      title: '...',
    };
  },

  computed: {
    ...mapState('projects', {
      loaded: 'loaded',
      loading: 'loading',
      projects: 'projects',
    }),
  },

  methods: {
    ...mapActions('projects', {
      getProjects: 'get',
    }),

    init() {
      const projectId = parseInt(this.$route.params.id, 10);
      this.project = this.projects.find((p) => p.id === projectId);
      this.title = this.project.name;
    },

    goHome() {
      this.$router.go(-1);
    },
  },

  created() {
    if (!this.loaded) {
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
.new-card {
  border-style: dashed;
  border-width: .2rem;
}
</style>
