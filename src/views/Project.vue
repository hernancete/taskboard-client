<template>
  <div class="container-lg">

    <div v-if="!projectsLoaded" class="d-flex justify-content-center align-items-center">
      <clock-icon size="1.5x"></clock-icon>
      <div class="px-2">Cargando...</div>
    </div>
    <div v-else class="row">
      {{ project.name }}
    </div>
  </div>
</template>

<script>
import {
  ClockIcon,
} from 'vue-feather-icons';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Project',

  components: {
    ClockIcon,
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
.pointer {
  cursor: pointer;
}
.new-card {
  border-style: dashed;
  border-width: .2rem;
}
</style>
