<template>
  <div id="app">
    <main-app />
  </div>
</template>

<script>
import MainApp from "./components/MainApp";
export default {
  name: "app",
  components: { MainApp },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      const elems = document.querySelectorAll(".fixed-action-btn");
      // eslint-disable-next-line no-undef
      M.FloatingActionButton.init(elems);
    });
  }
};
</script>

<style lang="scss"></style>
