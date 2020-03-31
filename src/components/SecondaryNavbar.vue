<template>
  <nav class="navbar navbar-expand-lg navbar-light row mb-2">
    <div class="container-lg justify-content-end px-0">
      <div class="navbar-nav">
        <slot name="left"></slot>
      </div>
      <div class="navbar-brand" v-if="title">{{ title }}</div>
      <div class="navbar-nav ml-auto">
        <slot name="right"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SecondaryNavbar',
  props: ['title'],
};
</script>

<style scoped>
</style>
