<template>
  <div class="container col-xl-9 mx-auto">
    <div class="header">
      <h1>TEST TEXT</h1>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <div>
      <p>
        Technologies used:
        <span v-for="tech in project.technologies" v-bind:key="tech.id">{{
          tech
        }}</span>
      </p>
      <p>Dates produced: {{ project.timeline }}</p>
      <div>
        <div id="projectText">
          <ul>
            <li
              class="bpList"
              v-for="bulletPoint in project.bulletPoints"
              v-bind:key="bulletPoint.id"
            >
              {{ bulletPoint }}
            </li>
          </ul>
          <p>{{project.additionalText}}</p>
        </div>
        <div id="projectImages">
          <div v-for="img in project.img" v-bind:key="img.id">
            <img :src="img.img" alt="img">
            <p>{{img.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
    props: ["project"],
};
</script>

<style>
</style>