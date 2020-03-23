<template>
  <div>
    <navbar></navbar>
    <div class="layout">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  padding-top: 64px;
  padding-bottom: 120px;
}
</style>
