import { createRouter, createWebHashHistory } from "vue-router"

import HomePage from "@/components/HomePage.vue"
import AboutPage from "@/components/AboutPage.vue"
import ContactPage from "@/components/ContactPage.vue"
import ProductsPage from "@/components/ProductsPage.vue"
import EmployeesPage from "@/components/EmployeesPage.vue"
import ContributersPage from "@/components/ContributersPage.vue"

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/products', component: ProductsPage },
  { path: '/employees', component: EmployeesPage },
  { path: '/contributers', component: ContributersPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;