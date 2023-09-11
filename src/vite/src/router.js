import { createRouter, createWebHashHistory} from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import ProductsPage from './components/ProductsPage.vue'
import EmployeesPage from './components/EmployeesPage.vue'
import ContributorsPage from './components/ContributorsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/products', component: ProductsPage },
  { path: '/employees', component: EmployeesPage },
  { path: '/contributors', component: ContributorsPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;