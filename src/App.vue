<template>
  <div id="app">
    <nav id="sidebar" class="sidebar">
      <div class="sidebar-header">
        <img
          id="profileImg"
          src=".\assets\Pennington profile image.jpg"
          alt="img"
        />
        <h3>Steven Pennington</h3>
      </div>

      <ul class="list-unstyled components">
        <p>FULL-STACK SOFTWARE DEVELOPER</p>
        <li>
          <router-link v-bind:to="{ name: 'home' }" class="sidebarLink"
            >Portfolio Overview</router-link
          >
        </li>
        <li>
          <router-link v-bind:to="{ name: 'about' }" class="sidebarLink"
            >About</router-link
          >
        </li>
        <li>
          <router-link v-bind:to="{ name: 'resume' }" class="sidebarLink"
            >Resume</router-link
          >
        </li>
        <li>
          <router-link v-bind:to="{ name: 'contact' }" class="sidebarLink"
            >Contact</router-link
          >
        </li>
      </ul>
      <div class="navigation-extend-bar">
        <div class="social-icons">
          <p>Social links</p>
          <a
            href="mailto:spennington45@gmail.com"
            class="btn btn-social-icon emailIcon"
            title="mail: spennington45@gmail.com"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>

          <a
            href="https://www.linkedin.com/in/steven-pennington"
            class="btn btn-social-icon btn-linkedin"
            title="linkedin: steven-pennington"
          >
            <font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'linkedin' }"
            />
          </a>

          <a
            rel="me"
            href="https://github.com/spennington45"
            class="btn btn-social-icon btn-github"
            title="github: spennington45"
          >
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
          </a>
        </div>

        <a href="#" class="navigation-extend-button js-extend-main-navigation">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#sidebar {
  min-width: 20%;
  max-width: 20%;
  min-height: 100vh;
  background: #013805;
  color: #fff;
  transition: all 0.3s;
}
#profileImg {
  width: auto;
  height: 200px;
  border-radius: 100%;
  padding-bottom: 20px;
  border: none !important;
}
img {
  border: solid 1px black !important;
}
body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}
.social-icons > a {
  margin-right: 10px;
  margin-left: 10px;
}
p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

.sidebarLink,
.sidebarLink:hover,
.sidebarLink:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}
#sidebar .sidebar-header {
  padding: 20px;
  background: #013805;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

.sidebarLink {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}
.sidebarLink:hover {
  color: #7386d5;
  background: #fff;
}
.router-link-exact-active {
  color: #7386d5 !important;
}
#sidebar ul li.active > .sidebarLink,
.sidebarLinka[aria-expanded="true"] {
  color: #fff;
  background: #005806;
}
.sidebarLink {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #013805;
}
.emailIcon {
  background: #fafafa !important;
}
@media (max-width: 1024px) {
  #sidebar {
    margin-left: -15%;
  }
  #sidebar > * {
    margin-right: 100%;
  }
  .sidebar-header {
    padding: 0% !important;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebar:hover {
    margin-left: 0%;
    min-width: 300px !important;
  }
  #sidebar:hover > * {
    margin-right: 0%;
  }
}
@media (max-width: 760px) {
  #profileImg {
    display: none;
  }
}
</style>
