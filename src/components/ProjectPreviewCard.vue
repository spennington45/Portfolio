<template>
  <div class="projectPreviewLayout">
    <div class="timeline">
      <span>
        {{ project.timeline }}
      </span>
        <span id="circle"></span>
    </div>
    <div class="text">
      <h2>{{ project.title }}</h2>
      <ul>
        <li
          class="bpList"
          v-for="bulletPoint in project.bulletPoints"
          v-bind:key="bulletPoint.id"
        >
          {{ bulletPoint }}
        </li>
      </ul>
      <div class="buttons">
        <span class="tech" v-for="tech in project.technologies" v-bind:key="tech.id">
          {{tech}}
        </span>
      <button class="btn btn-success" v-on:click="projectDetails(project.id)">
        More details
      </button>
      <a v-if="project.url != ''" :href="project.url" class="btn btn-success">Visit project</a>
      </div>
    </div>
    <div class="img">
      <img v-bind:src="project.img[0]" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["project"],
  methods: {
    projectDetails(toId) {
      this.$router.push({name: "projectDetails", params: {id: toId}})
    }
  }
};
</script>

<style>
.projectPreviewLayout {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 100px, 600px, 500px;
  grid-template-areas: "timeline text img";
}
.timeline {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  grid-area: timeline;
  width: 100px;
  border-right: solid 1px black;
}
#circle {
  position: relative;
  content: "";
  margin-top: 7px;
  background-color: #9b0000;
  border-radius: 50%;
  width: 7px;
  height: 7px;
}
.buttons {
  display: flex;
  flex-flow: row;
}
.tech {
  background: #013805;
  color: #fff;
  margin-right: 10px;
  align-self: center;
  padding-left: 5px;
  padding-right: 5px;
}
.text {
  display: flex;
  flex-flow: column;
  grid-area: text;
  width: 600px;
  height: auto;
  align-items: flex-start;
  margin-left: 50px;
  padding-bottom: 25px;
  margin-bottom: 25px;
}
.img {
  display: flex;
  flex-flow: column;
  grid-area: img;
  width: 500px;
  height: auto;
  padding-bottom: 25px;
  margin-bottom: 25px;
  margin-left: 0px;
}
.linkColor {
  color: lavender;
}
.bpList {
  text-align: left;
}
.btn-success {
  margin-right: 10px;
}
@media (max-width: 1024px) {
  .projectPreviewLayout {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 100px, auto;
    grid-template-areas:
      "timeline text"
      "timeline img";
  }
  .img {
    margin-left: 50px;
  }
  .text {
    border-bottom: none;
  }
}
</style>