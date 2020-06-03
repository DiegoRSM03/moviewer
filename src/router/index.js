import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/movies',
		name: 'Movies',
		component: () => import('../views/Movies.vue')
	},
	{
		path: '/series',
		name: 'Series',
		component: () => import('../views/Series.vue')
	},
	{
		path: '/serie/:id',
		name: 'Serie',
		props: route => ({
			id: route.params.id,
			section: 'tv/'
		}),
		component: () => import('../views/MovieOrSerie.vue')
	},
	{
		path: '/movie/:id',
		name: 'Movie',
		props: route => ({
			id: route.params.id,
			section: 'movie/'
		}),
		component: () => import('../views/MovieOrSerie.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
