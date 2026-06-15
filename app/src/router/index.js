import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
// import Settings from '../views/Settings.vue'

const routes = [
  { path: '/', component: Dashboard },
//   { path: '/settings', component: Settings }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})