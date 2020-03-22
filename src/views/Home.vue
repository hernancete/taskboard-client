<template>
  <div class="container-lg">

    <div v-if="!projectsLoaded" class="d-flex justify-content-center align-items-center">
      <clock-icon size="1.5x"></clock-icon>
      <div class="px-2">Cargando...</div>
    </div>
    <div v-else class="row">

      <div class="col-md-4 col-sm-6 col-12 mb-4 pointer"
      @click="openEditProject(0)">
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
              @click="openEditProject(project.id)">
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
  FolderPlusIcon, Edit3Icon, ClockIcon,
} from 'vue-feather-icons';
import { mapState, mapActions } from 'vuex';
import EditProjectForm from '@/components/EditProjectForm.vue';


export default {
  name: 'Home',

  components: {
    FolderPlusIcon,
    Edit3Icon,
    ClockIcon,
    'edit-project-form': EditProjectForm,
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

    openEditProject(projectId) {
      if (projectId === 0) {
        this.editingProject = Object.assign(this.editing, {
          id: 0,
          name: 'New Project',
          description: '',
          imageUrl: '',
        });
      }
      else {
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
    this.getProjects();
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
