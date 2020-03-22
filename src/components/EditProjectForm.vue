<template>
  <form>
    <fieldset :disabled="!formEnabled">
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="name"
          aria-describedby="name" placeholder="Name of project"
          v-model="project.name">
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <textarea class="form-control" id="description" rows="5"
          placeholder="Some description"
          v-model="project.description"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="imageUrl" class="col-sm-2 col-form-label">Image Url</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="imageUrl"
          aria-describedby="imageUrl" placeholder="URL from a nice picture"
          v-model="project.imageUrl">
          <small id="imageUrlHelp" class="form-text text-muted">
            Copy an url of a nice image.
            You can visit <a href="https://picsum.photos" target="_blank">this site</a>
            for awesome pictures.
          </small>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'EditProjectForm',
  props: ['project'],
  data() {
    return {
      formEnabled: true,
    };
  },
  methods: {
  },
};
</script>
