<template>
  <div class="container-lg home-view">
    <secondary-navbar>
      <b-button slot="right" variant="outline-primary"
        @click="openEditProject($event, 0)">
        <b-icon-plus font-scale="2"></b-icon-plus> New Project
      </b-button>
    </secondary-navbar>
    <loading-text v-if="!loaded || loading"></loading-text>
    <div v-else class="row">

      <!-- <div class="col-md-4 col-sm-6 col-12 mb-4 pointer"
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
      </div> -->

      <div v-for="project in projects" :key="project.id"
      class="col-md-4 col-sm-6 col-12 mb-4">
        <div class="card pointer" @click="goToProject(project.id)">
          <img v-bind:src="project.imageUrl"
          class="card-img-top" :alt="project.name">
          <div class="card-body">
            <h3 class="card-title d-flex align-items-start">
              <div class="mr-auto">{{ project.name }}</div>
              <b-button variant="outline" class="right"
                @click="openEditProject($event, project.id)">
                <b-icon-pencil font-scale="2"></b-icon-pencil>
              </b-button>
              <b-button variant="outline" class="right"
                @click="openRemoveProject($event, project.id)">
                <b-icon-trash font-scale="2"></b-icon-trash>
              </b-button>
            </h3>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="edit-project" v-model="editing" @ok="edit">
      <template v-slot:modal-title>{{ editingProject.name }}</template>
      <template v-slot>
        <edit-project-form :project="editingProject"></edit-project-form>
      </template>
    </b-modal>

    <b-modal id="remove-project" v-model="removing" @ok="remove">
      <template v-slot:modal-title>Delete {{ removingProject.name }}</template>
      <template v-slot>
        <div >Are sure you want to delete the <b>{{removingProject.name}}</b> project?</div>
      </template>
    </b-modal>

  </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import { BIconPencil, BIconPlus, BIconTrash } from 'bootstrap-vue';
import LoadingText from '@/components/LoadingText.vue';
import EditProjectForm from '@/components/EditProjectForm.vue';
import SecondaryNavbar from '@/components/SecondaryNavbar.vue';

export default {
  name: 'Home',

  components: {
    LoadingText,
    BIconPencil,
    BIconPlus,
    BIconTrash,
    EditProjectForm,
    SecondaryNavbar,
  },

  data() {
    return {
      editing: false,
      removing: false,
      editingProject: {},
      removingProject: {},
    };
  },

  computed: {
    ...mapState('projects', {
      loaded: 'loaded',
      loading: 'loading',
      creating: 'creating',
      projects: 'projects',
    }),
    ...mapGetters('projects', {
      emptyProject: 'emptyProject',
    }),
  },

  methods: {
    ...mapActions('projects', {
      getProjects: 'get',
      createProject: 'create',
      updateProject: 'update',
      removeProject: 'remove',
    }),

    openEditProject(event, projectId) {
      if (projectId === 0) {
        this.editingProject = { ...this.emptyProject };
      }
      else {
        event.stopPropagation();
        const e = this.projects.find((p) => p.id === projectId);
        this.editingProject = { ...e };
      }
      this.editing = true;
    },

    openRemoveProject(event, projectId) {
      event.stopPropagation();
      const d = this.projects.find((p) => p.id === projectId);
      this.removingProject = { ...d };
      this.removing = true;
    },

    resetEditing() {
      this.editingProject = {};
    },

    resetRemoving() {
      this.removingProject = {};
    },

    async edit() {
      // TODO: do some form validation
      if (this.editingProject.id === 0) {
        const newProject = { ...this.editingProject };
        delete newProject.id;
        await this.createProject(newProject);
      }
      else {
        const updateProject = { ...this.editingProject };
        await this.updateProject(updateProject);
        console.log('Not awaiting ni bosta');
      }
      this.resetEditing();
    },

    async remove() {
      await this.removeProject(this.removingProject.id);
      this.resetRemoving();
    },

    goToProject(projectId) {
      this.$router.push(`/project/${projectId}`);
    },
  },

  created() {
    if (!this.loaded) {
      this.getProjects();
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
