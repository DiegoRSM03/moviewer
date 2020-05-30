import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		URL_DB: 'https://api.themoviedb.org/3/',
		URL_IMAGES: 'https://image.tmdb.org/t/p/original',
		API_KEY: '?api_key=73eda6289dbdc8646df9a72d1cccc2cb&language=en-US'
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
