<template>
    <div>
        <nav-var></nav-var>
        <div class="layout">
            <router-view/>
        </div>
    </div>
</template>

<script>

import NavVar from '../components/NavVar';

export default {
    name: 'Layout',
    components: {
        NavVar,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
    padding-top: 100px;
    padding-bottom: 100px;
}
</style>
