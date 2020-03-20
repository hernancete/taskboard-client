<template>
    <div class="container-md">
        <div class="jumbotron mt-4">
            <h1 class="display-4">Task Board</h1>
            <p class="lead">This is a simple task board to track simple project tasks.</p>
            <hr class="my-4">
            <p>You can create boards for different projects.</p>
            <div class="row mx-0">
                <div class="col"></div>
                <a class="btn btn-primary btn-lg" href="#"
                role="button" @click="goHome">Ingresar</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LandingPage',
    data() {
        return {
        };
    },
    methods: {
        goHome() {
            this.$router.push({ name: 'Home' });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
