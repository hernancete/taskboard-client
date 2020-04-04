<template>
  <div class="container-lg project-view">
    <secondary-navbar :title="title">
      <b-button slot="left" variant="outline" size="sm" class="left"
        @click="goHome">
        <b-icon-chevron-left font-scale="2"></b-icon-chevron-left>
      </b-button>
      <b-button slot="right" variant="outline-primary">
        <b-icon-plus font-scale="2"></b-icon-plus> New Task
      </b-button>
    </secondary-navbar>
    <loading-text v-if="!projectLoaded || refreshingProject"></loading-text>
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
import { BIconChevronLeft, BIconPlus } from 'bootstrap-vue';
import LoadingText from '@/components/LoadingText.vue';
import SecondaryNavbar from '@/components/SecondaryNavbar.vue';

export default {
  name: 'Project',

  components: {
    LoadingText,
    SecondaryNavbar,
    BIconChevronLeft,
    BIconPlus,
  },

  data() {
    return {
      project: {},
      title: '...',
      projectId: parseInt(this.$route.params.id, 10),
    };
  },

  computed: {
    ...mapState('projects', {
      refreshingProject: 'refreshing',
      projects: 'projects',
    }),

    ...mapState('tasks', {
      loaded: 'loaded',
      loading: 'loading',
      tasks: 'tasks',
    }),

    projectLoaded() {
      return this.projects.findIndex((p) => p.id === this.projectId) !== -1;
    },
  },

  methods: {
    ...mapActions('projects', {
      refreshProject: 'refresh',
    }),

    ...mapActions('tasks', {
      getTasks: 'get',
    }),

    init() {
      this.project = this.projects.find((p) => p.id === this.projectId);
      this.title = this.project.name;
    },

    goHome() {
      this.$router.go(-1);
    },
  },

  async mounted() {
    if (!this.projectLoaded) {
      try {
        await this.refreshProject(this.projectId);
        this.init();
      }
      catch {
        console.error('Something went wrong refreshing project.');
      }
    }
    else {
      this.init();
    }
    this.getTasks(this.projectId);
  },
};
</script>

<style scoped>
.new-card {
  border-style: dashed;
  border-width: .2rem;
}
</style>
