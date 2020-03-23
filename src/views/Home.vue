<template>
  <div class="container-lg home-view">

    <loading-text v-if="!projectsLoaded"></loading-text>
    <div v-else class="row">

      <div class="col-md-4 col-sm-6 col-12 mb-4 pointer"
      @click="openEditProject($event, 0)">
        <div class="card new-card">
          <div class="card-img-top">
            <div class="d-flex justify-content-center"
            style="min-height: 170px;">
              <folder-plus-icon size="120"
              class="align-self-center icon-gray"
              style="stroke-width: .75;">
              </folder-plus-icon>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">New Project</h3>
            <p class="card-text">Click to create a new awesome project!</p>
          </div>
        </div>
      </div>

      <div v-for="project in projects" :key="project.id"
      class="col-md-4 col-sm-6 col-12 mb-4 pointer"
      @click="goToProject(project.id)">
        <div class="card">
          <img v-bind:src="project.imageUrl"
          class="card-img-top" :alt="project.name">
          <div class="card-body">
            <h3 class="card-title">
              {{ project.name }}
              <button type="button" class="btn btn-sm float-right"
              @click="openEditProject($event, project.id)">
                <edit-3-icon size="1.5x"></edit-3-icon>
              </button>
            </h3>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="edit-project" v-model="editing">
      <template v-slot:modal-title>{{ editingProject.name }}</template>
      <template v-slot>
        <edit-project-form :project="editingProject"></edit-project-form>
      </template>
    </b-modal>

  </div>
</template>

<script>

import {
  FolderPlusIcon, Edit3Icon,
} from 'vue-feather-icons';
import { mapState, mapActions } from 'vuex';
import LoadingText from '@/components/LoadingText.vue';
import EditProjectForm from '@/components/EditProjectForm.vue';

export default {
  name: 'Home',

  components: {
    LoadingText,
    FolderPlusIcon,
    Edit3Icon,
    EditProjectForm,
  },

  data() {
    return {
      editing: false,
      editingProject: {
        id: 0,
        name: '',
        description: '',
        imageUrl: '',
      },
    };
  },

  computed: {
    ...mapState(['projectsLoaded', 'projects']),
  },

  methods: {
    ...mapActions(['getProjects']),

    openEditProject(event, projectId) {
      if (projectId === 0) {
        this.editingProject = Object.assign(this.editing, {
          id: 0,
          name: 'New Project',
          description: '',
          imageUrl: '',
        });
      }
      else {
        event.stopPropagation();
        const e = this.projects.find((p) => p.id === projectId);
        this.editingProject = Object.assign(this.editing, e);
      }
      this.editing = true;
    },

    goToProject(projectId) {
      this.$router.push(`/project/${projectId}`);
    },
  },

  created() {
    if (!this.projectsLoaded) {
      this.getProjects();
    }
  },
};
</script>

<style scoped>
.home-view {
  padding-top: 64px;
}
.new-card {
  border-style: dashed;
  border-width: .2rem;
}
</style>
