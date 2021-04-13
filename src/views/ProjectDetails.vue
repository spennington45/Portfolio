<template>
  <div>
    <div class="header">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <div class="projectDetailLayout">
      <div class="textDetails">
        <p class="text-left">
          Technologies used:
          <span v-for="tech in project.technologies" v-bind:key="tech.id"
            >{{ tech }}
          </span>
        </p>
        <p class="text-left">Dates produced: {{ project.timeline }}</p>
        <div>
          <div>
            <ul>
              <li
                class="bpList"
                v-for="bulletPoint in project.bulletPoints"
                v-bind:key="bulletPoint.id"
              >
                {{ bulletPoint }}
              </li>
            </ul>
            <p class="text-left">{{ project.additionalText }}</p>
          </div>
        </div>
      </div>
      <div class="imglist">
        <div class="imgDetails" v-for="img in project.img" v-bind:key="img.id">
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
.projectDetailLayout {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 600px, 500px;
  grid-template-areas: "textDetails imglist";
  margin: 100px;
  column-gap: 25px;
}
.imglist {
  grid-area: imglist;
}
.textDetails {
  display: flex;
  flex-flow: column;
  grid-area: text;
  width: 600px;
  height: auto;
  grid-area: textDetails;
  align-items: flex-start;
  margin-left: 50px;
  padding-bottom: 25px;
  margin-bottom: 25px;
}
.imgDetails {
  display: flex;
  flex-flow: column;
  max-width: 500px;
  height: auto;
  padding-bottom: 25px;
  margin-bottom: 25px;
  margin-left: 0px;
}
@media (max-width: 1650px) {
  .projectDetailLayout {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 500px, 400px;
  grid-template-areas: "textDetails imglist";
}
  .imgDetails {
    max-width: 400px;
  }
  .textDetails {
      width: 500px;
  }
}
@media (max-width: 1320px) {
  .projectDetailLayout {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 400px, 300px;
  grid-template-areas: "textDetails imglist";
}
  .imgDetails {
    max-width: 300px;
  }
  .textDetails {
      width: 400px;
  }
}
@media (max-width: 1024px) {
  .projectDetailLayout {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto;
    grid-template-areas:
      "textDetails"
      "imglist";
  }
  .imgDetails {
    margin-left: 50px;
  }
  .textDetails {
    border-bottom: none;
  }
}
</style>