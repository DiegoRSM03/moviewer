import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
	path: '/',
	redirect: '/home',
	},
	{
	path: '/home',
	name: 'Home',
	component: Home
	},
	{
	path: '/movies',
	name: 'Movies',
	component: () => import('../views/Movies.vue')
	},
	{
	path: '/movies/:movie-id',
	name: 'Movie',
	component: () => import('../views/Movie.vue')
	},
	{
	path: '/series',
	name: 'Series',
	component: () => import('../views/Series.vue')
	},
	{
	path: '/series/:serie-id',
	name: 'Serie',
	component: () => import('../views/Serie.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
