import { createRouter, createWebHashHistory} from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import Products from './components/Products.vue'
import Employees from './components/Employees.vue'
import Contributors from './components/Contributors.vue'
import NavBar from './components/NavBar.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/products', component: Products },
  { path: '/employees', component: Employees },
  { path: '/contributors', component: Contributors },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;