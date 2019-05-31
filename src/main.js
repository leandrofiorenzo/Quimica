import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import store from './store'
import Snotify, { SnotifyPosition } from 'vue-snotify'

const options = {
  toast: {
    position: SnotifyPosition.leftBottom
  }
}

Vue.use(Snotify, options);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
