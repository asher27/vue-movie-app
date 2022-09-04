import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'


export default createRouter({
  // Hash 모드(http://google.com/#/search), History 모드
  history: createWebHashHistory(),
  scrollBehavior() {
    return {top: 0}
  },
  // pages
  // https://google.com/
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ]
})