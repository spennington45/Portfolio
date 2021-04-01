<template>
  <div class="container col-xl-9 mx-auto">
    <div class="header">
      <h1>Project Overview</h1>
      <p>This page deplays a breaf overview of projects I have worked on</p>
    </div>

    <div v-for="project in projects" v-bind:key="project.id">
      <project-preview-card v-bind:project="project" />
    </div>
  </div>
</template>

<script>
import ProjectPreviewCard from "../components/ProjectPreviewCard.vue";
export default {
  data() {
    return {
      projects: this.$store.state.projects,
    };
  },
  components: {
    ProjectPreviewCard,
  },
};
</script>

<style>
.header {
  border-bottom: solid 1px black;
  margin: 50px;
}
</style>