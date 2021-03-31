import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import BootStrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootStrapSocial from 'bootstrap-social'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(faLinkedin, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootStrapVue)
Vue.use(BootStrapSocial)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
