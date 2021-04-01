<template>
  <div class="projectPreviewLayout">
    <div class="timeline">
      {{ project.timeline }}
    </div>
    <div class="text">
      <h2>{{ project.title }}</h2>
      <ul>
        <li class="bpList"
          v-for="bulletPoint in project.bulletPoints"
          v-bind:key="bulletPoint.id"
        >
          {{ bulletPoint }}
        </li>
      </ul>
      <button class="btn btn-success">
        <a class="linkColor" v-if="project.url != ''" :href="project.url"
          >Visit project</a
        >
      </button>
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
  flex-flow: column;
  grid-area: timeline;
  width: 100px;
  border-right: solid 1px black;
}
.text {
  display: flex;
  flex-flow: column;
  grid-area: text;
  width: 600px;
  height: auto;
  align-items: flex-start;
  margin-left: 50px;
  border-bottom: solid 1px black;
  padding-bottom: 25px;
  margin-bottom: 25px;
}
.img {
  display: flex;
  flex-flow: column;
  grid-area: img;
  width: 500px;
  height: auto;
  border-bottom: solid 1px black;
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