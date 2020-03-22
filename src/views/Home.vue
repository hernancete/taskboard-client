<template>
  <div class="container-lg">
    <!-- <div class="row">
      <img src="https://picsum.photos/id/191/1920/150?grayscale&blur=5"
      alt="header" style="max-width:100%;">
    </div> -->

    <div v-if="!projectsLoaded" class="d-flex justify-content-center">Cargando...</div>
    <div v-else class="row">

      <div class="col-md-4 col-sm-6 col-12 mb-4 pointer"
      data-toggle="modal" data-target="#editProjectFormModal">
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
        <edit-project-form-modal project=""></edit-project-form-modal>
      </div>

      <div v-for="project in projects" :key="project.id"
      class="col-md-4 col-sm-6 col-12 mb-4 pointer">
        <div class="card">
          <img v-bind:src="project.imageUrl"
          class="card-img-top" :alt="project.name">
          <div class="card-body">
            <h3 class="card-title">
              {{ project.name }}
              <button type="button" class="btn btn-sm float-right"
              data-toggle="modal" data-target="#editProjectFormModal">
                <edit-3-icon size="1.5x"></edit-3-icon>
              </button>
            </h3>
            <p class="card-text">{{ project.description }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
        <edit-project-form-modal v-if="project" v-bind:project="project"></edit-project-form-modal>
      </div>
    </div>

  </div>
</template>

<script>

import { FolderPlusIcon, Edit3Icon } from 'vue-feather-icons';
import { mapState, mapActions } from 'vuex';
import EditProjectFormModal from '@/components/EditProjectFormModal.vue';


export default {
  name: 'Home',
  components: {
    FolderPlusIcon,
    Edit3Icon,
    'edit-project-form-modal': EditProjectFormModal,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['projectsLoaded', 'projects']),
  },
  methods: {
    ...mapActions(['getProjects']),
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
