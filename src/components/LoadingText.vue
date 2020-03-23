<template>
  <div class="d-flex justify-content-center align-items-center">
    <clock-icon size="1.5x"></clock-icon>
    <div class="px-2">Cargando...</div>
  </div>
</template>

<script>
import { ClockIcon } from 'vue-feather-icons';

export default {
  name: 'LoadingText',
  components: {
    ClockIcon,
  },
};
</script>
