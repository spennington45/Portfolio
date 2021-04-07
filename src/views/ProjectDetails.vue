<template>
  <div class="container col-xl-9 mx-auto">
    <div class="row">
      <div class="row">
        <div class="header col-12 ">
          <h1>{{ project.title }}</h1>
          <p>{{ project.description }}</p>
        </div>
      </div>
      <div class="row ml-5">
        <div class="col-md-5 col-sm-10 col-xs-10">
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
        <div class="col-md-5 col-sm-10 col-xs-10">
          <div class="imgDetails" v-for="img in project.img" v-bind:key="img.id">
            <img :src="img.img" alt="img" />
            <p>{{ img.text }}</p>
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
.imgDetails {
  display: flex;
  flex-flow: column;
  max-width: 500px;
  height: auto;
  padding-bottom: 25px;
  margin-bottom: 25px;
  margin-left: 0px;
}
@media (max-width: 1124px) {

}
</style>