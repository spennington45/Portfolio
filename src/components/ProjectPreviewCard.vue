<template>
  <div class="projectPreviewLayout">
    <div class="timeline">
      <span>
        {{ project.timeline }}
      </span>
      <span id="circle"></span>
    </div>
    <div class="text pr-2">
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
      <h5>Technologies</h5>
      <div class="row w-fill">
        <div class="col d-flex flex-row">
          <span
            class="tech"
            v-for="tech in project.technologies"
            v-bind:key="tech.id"
          >
            {{ tech }}
          </span>
          <div class="col d-flex flex-end justify-content-end pr-0">
            <button
              class="btn btn-sm btn-success"
              v-on:click="projectDetails(project)"
            >
              More details
            </button>
            <a
              v-if="project.url != ''"
              :href="project.url"
              class="btn btn-sm btn-success"
              >Visit project</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="img">
      <img v-bind:src="project.img[0].img" alt="img" />
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
    projectDetails(project) {
      this.$router.push({
        name: "projectDetails",
        params: { id: project.id },
        props: project,
      });
    },
  },
};
</script>

<style>
.w-fill {
  width: 100%;
}
.align-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end !important;
}
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
  margin-right: -3px;
  background-color: #9b0000;
  border-radius: 50%;
  width: 7px;
  height: 7px;
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
  max-width: 500px;
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
@media (max-width: 1280px) {
  .projectPreviewLayout {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 50px, 400px, 300px;
  grid-template-areas: "timeline text img";
}
  .img {
    max-width: 300px;
  }
  .text {
      width: 400px;
  }
  .timeline {
    width: 50px;
  }
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
@media (max-width: 1770px) {
  .timeline{
    margin-left: 0px;
  }
}
</style>