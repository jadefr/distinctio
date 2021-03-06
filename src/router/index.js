import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Document from '../views/Document.vue'
import Author from '../views/Author.vue'
import Title from '../views/Title.vue'
import About from '../views/About.vue'
import PrivacyPolicy from '../views/PrivacyPolicy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/galeria',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/galeria/:authorURL/:titleURL/:sectionURL',
    name: 'Document',
    component: Document
  },
  {
    path: '/galeria/:authorURL',
    name: 'Author',
    component: Author
  },
  {
    path: '/galeria/:authorURL/:titleURL',
    name: 'Title',
    component: Title
  },
  {
    path: '/guia-de-uso',
    name: 'About',
    component: About
  },
  {
    path: '/politica-de-privacidade',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
