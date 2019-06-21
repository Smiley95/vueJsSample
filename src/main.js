import Vue from 'vue'
import { rtdbPlugin } from 'vuefire'
import App from './App.vue'
import router from './router'
import SortedTablePlugin from "vue-sorted-table"

Vue.use(SortedTablePlugin)

Vue.use(rtdbPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
