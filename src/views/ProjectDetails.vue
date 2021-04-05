<template>
  <div class="container col-xl-9 mx-auto">
    <div class="header">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <div class="projectDetailsLayout">
      <div class="textDetails">
        <p>
          Technologies used:
          <span v-for="tech in project.technologies" v-bind:key="tech.id"
            >{{ tech }}
          </span>
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
            <p class="additionalText">{{ project.additionalText }}</p>
          </div>
        </div>
      </div>
      <div class="imgDetails">
        <div v-for="img in project.img" v-bind:key="img.id">
          <img :src="img.img" alt="img" />
          <p>{{ img.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {},
    };
  },
  created() {
    this.project = this.$store.getters.getProjectByID(this.$route.params.id);
    console.log(this.project);
  },
};
</script>

<style>
.projectDetailsLayout {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 600px, 500px;
  grid-template-areas: "textDetails imgDetails";
}
.additionalText {
  text-align: left !important;
}
.textDetails {
  display: flex;
  flex-flow: column;
  grid-area: textDetails;
  width: 600px;
  height: auto;
  align-items: flex-start;
  margin-left: 50px;
  padding-bottom: 25px;
  margin-bottom: 25px;
}
.imgDetails {
  display: flex;
  flex-flow: column;
  grid-area: imgDetails;
  width: 500px;
  height: auto;
  padding-bottom: 25px;
  margin-bottom: 25px;
  margin-left: 0px;
}
@media (max-width: 1024px) {
  .projectDetailsLayout {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
    grid-template-areas:
      "textDetails"
      "imgDetails";
  }
  .imgDetails {
    margin-left: 50px;
  }
  .textDetails {
    border-bottom: none;
  }
}
</style>