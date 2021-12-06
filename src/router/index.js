import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import ContactDetails from '../views/contact-details.vue'
import Greeting from '../views/greeting.vue'
import contactPage from '../views/contact-page.vue';
import contactEdit from '../views/contact-edit.vue';
import charts from '../views/charts.vue';
import userService from '../services/user.service';
import news from '@/views/news'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/greeting',

    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/greeting',
        name: 'Greeting',
        component: Greeting,
      },
      {
        path: '/contacts',
        name: 'Contact',
        component: contactPage,
      },
      {
        path: '/contacts/edit/:contactId?',
        name: 'ContactEdit',
        component: contactEdit
      },
      {
        path: '/contact/:contactId',
        name: 'ContactDetails',
        component: ContactDetails
      },
      {
        path: '/charts',
        name: 'Charts',
        component: charts
      },
      {
        path: '/news',
        name: 'News',
        component: news
      },
    ],
  },
]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const user = userService.getLoggedInUser();
  if (to.name !== 'Login' && !user) next({ name: 'Login' })
  else next()
})

export default router
