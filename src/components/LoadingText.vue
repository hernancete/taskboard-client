<template>
  <div class="d-flex justify-content-center align-items-center">
    <b-icon-clock font-scale="2"></b-icon-clock>
    <div class="px-2">Cargando...</div>
  </div>
</template>

<script>
import { BIconClock } from 'bootstrap-vue';

export default {
  name: 'LoadingText',
  components: {
    BIconClock,
  },
};
</script>
