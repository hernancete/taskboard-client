<template>
  <div class="modal fade" id="editProjectFormModal"
  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

          <form>
            <fieldset :disabled="!formEnabled">
              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="name"
                  aria-describedby="name" placeholder="Name of project"
                  v-model="editing.name">
                </div>
              </div>
              <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="description" rows="5"
                  placeholder="Some description"
                  v-model="editing.description"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label for="imageUrl" class="col-sm-2 col-form-label">Image Url</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="imageUrl"
                  aria-describedby="imageUrl" placeholder="URL from a nice picture"
                  v-model="editing.imageUrl">
                  <small id="imageUrlHelp" class="form-text text-muted">
                    Copy an url of a nice image.
                    You can visit <a href="https://picsum.photos" target="_blank">this site</a>
                    for awesome pictures.
                  </small>
                </div>
              </div>
            </fieldset>
          </form>

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
import { mapState } from 'vuex';
// import $ from 'jquery';

export default {
  name: 'EditProjectFormModal',
  props: ['project'],
  data() {
    return {
      formEnabled: true,
      title: 'New Project',
      editing: {
        name: '',
        description: '',
        imageUrl: '',
      },
    };
  },
  methods: {
    save() {
      console.log('Call createProject action...');
      // $('#editProjectFormModal').modal('hide');
    },
  },
  mounted() {
    // console.log('Mounted', this.project);
    console.log('name', this.project.name);
    console.log('description', this.project.description);
    console.log('imageUrl', this.project.imageUrl);
  },
};
</script>
