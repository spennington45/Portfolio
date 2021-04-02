<template>
  <div class="container col-xl-5 mt-5 shift-left">
    <h1>Contact Me</h1>
    <div class="d-flex flex-column text-left">

    <p>
      email:
      <font-awesome-icon :icon="['fas', 'envelope']" />
      <a
        href="mailto:spennington45@gmail.com"
        class="ml-auto"
        title="mail: spennington45@gmail.com"
        > spennington45@gmail.com</a
      >
    </p>
    <p>
      Linkedin:
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
      <a
        href="https://www.linkedin.com/in/steven-pennington"
        class="ml-auto"
        title="linkedin: steven-pennington"
      > steven-pennington
      </a>
    </p>
    <p>
      Github:
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
      <a
        href="https://github.com/spennington45"
        class="ml-auto"
        title="github: spennington45"
      > spennington45
      </a>
    </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shift-left {
  margin-left: 5% !important;
}
</style>