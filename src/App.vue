<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
body {
  overflow-x: hidden;
  overflow-y: scroll;
}
.icon-gray {
  stroke: gray;
}
.modal-backdrop {
  opacity: 0.4 !important;
}
.pointer {
  cursor: pointer;
}
/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
} */

button.left {
  margin-left: -12px;
}
button.btn-sm.left {
  margin-left: -8px;
}
button.right {
  margin-right: -12px;
}
button.btn-sm.right {
  margin-right: -8px;
}

</style>
