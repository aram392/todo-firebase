import Vue from 'vue'
import App from './App.vue'
import firebase from './firebase'
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
