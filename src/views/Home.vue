<template>
    <div class="container-lg">
        <!-- <div class="row">
            <img src="https://picsum.photos/id/191/1920/150?grayscale&blur=5"
            alt="header" style="max-width:100%;">
        </div> -->

        <div v-if="!projects.loaded" class="d-flex justify-content-center">Cargando...</div>
        <div v-else class="row">
            <div v-for="project in projects.data" :key="project.id"
            class="col-md-4 col-sm-6 col-12 mb-4">
                <div class="card">
                    <img src="https://picsum.photos/id/191/400/250"
                    class="card-img-top" :alt="project.name">
                    <div class="card-body">
                        <h3 class="card-title">{{ project.name }}</h3>
                        <p class="card-text">{{ project.description }}</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
            <div v-for="project in projects.data" :key="project.id.toString()+'d'"
            class="col-md-4 col-sm-6 col-12 mb-4">
                <div class="card">
                    <img src="https://picsum.photos/id/191/400/250"
                    class="card-img-top" :alt="project.name">
                    <div class="card-body">
                        <h3 class="card-title">{{ project.name }}</h3>
                        <p class="card-text">{{ project.description }}</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
    name: 'Home',
    data() {
        return {
        };
    },
    computed: {
        ...mapState(['projects']),
    },
    methods: {
        ...mapActions(['getProjects']),
    },
    created() {
        this.getProjects();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
