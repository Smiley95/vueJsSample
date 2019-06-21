import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddPerson from './components/AddPerson.vue'
import UpdatePerson from './components/UpdatePerson.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
          name: 'Add',
          path: '/add',
          component: AddPerson
    },
    {
        name: 'Edit',
        path: '/edit/:ID',
        component: UpdatePerson
    }
  ]
})
