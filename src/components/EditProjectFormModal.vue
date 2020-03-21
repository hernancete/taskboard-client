<template>
  <div class="modal fade" id="editProjectFormModal"
  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Project</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <edit-project-form :project="project"></edit-project-form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" @click="save">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditProjectForm from '@/components/EditProjectForm.vue';

export default {
  name: 'EditProjectFormModal',
  props: ['project'],
  components: {
    'edit-project-form': EditProjectForm,
  },
  methods: {
    save(event) {
      console.log('Saving...', event);
    },
  },
};
</script>
