<template>
<div id="slider-sections">
	<div class="container" :style="`background-image: url(${URL_IMAGES}${moviesOrSeries[item-1].backdrop_path});`" v-for="item in 5" :key="item.id">
		<div class="transparent">
			<div class="content">
				<div class="info">
					<div class="rate-year">
						<span class="rate"><span class="flaticon-star"></span>{{ moviesOrSeries[item-1].vote_average }} / 10</span>

						<span v-if="moviesOrSeries[item-1].release_date  != null" class="year"><span class="flaticon-popcorn-box"></span>{{ moviesOrSeries[item-1].release_date }}</span>
						<span v-else class="year"><span class="flaticon-popcorn-box"></span>{{ moviesOrSeries[item-1].first_air_date }}</span>

						<span class="views"><span class="flaticon-visibility"></span>{{ moviesOrSeries[item-1].popularity }}</span>
					</div>
					<div class="lore">
						<h1 v-if="moviesOrSeries[item-1].title != null">{{ moviesOrSeries[item-1].title }}</h1>
						<h1 v-else>{{ moviesOrSeries[item-1].name }}</h1>

						<p>{{ moviesOrSeries[item-1].overview.substring(0, 300) }}...</p>
					</div>
					<a v-if="moviesOrSeries[item-1].title != null" :href="'/movie/' + moviesOrSeries[item-1].id"><span class="flaticon-clapperboard"></span>WATCH THE MOVIE</a>
					<a v-else :href="'/serie/' + moviesOrSeries[item-1].id"><span class="flaticon-clapperboard"></span>WATCH THE SERIE</a>
				</div>
				<div class="slider-buttons">
					<span @click="prevSlider()" v-if="item-1 != 0" class="flaticon-left-arrow"></span>
					<template v-if="item-1 != 0">
						<div v-if="item-1 != 4" class="line"></div>
					</template>
					<span @click="nextSlider()" v-if="item-1 != 4" class="flaticon-right-arrow"></span>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
	data () {
		return {
			moviesOrSeries: []
		}
	},
	props: {
		section: String
	},
	computed: {
		...mapState([
			'URL_DB',
			'URL_IMAGES',
			'API_KEY'
		])
	},
	methods: {
		prevSlider () {
			let slider = document.querySelector('#slider-sections').style
			slider.marginLeft = parseInt(slider.marginLeft) + ((window.innerWidth * 100) / 20)
		},
		nextSlider () {
			let slider = document.querySelector('#slider-sections').style
			slider.marginLeft = parseInt(slider.marginLeft) - ((window.innerWidth * 100) / 20)
		}
	},
	mounted () {
		switch (this.section) {
			case 'home':
				axios
					.get(this.URL_DB + 'movie/popular' + this.API_KEY)
					.then(response => (this.moviesOrSeries = response.data.results))
			break
			case 'movies':
				axios
					.get(this.URL_DB + 'movie/popular' + this.API_KEY)
					.then(response => (this.moviesOrSeries = response.data.results))
			break
			case 'series':
				axios
					.get(this.URL_DB + 'tv/popular' + this.API_KEY)
					.then(response => (this.moviesOrSeries = response.data.results))
			break
		}
	},
}
</script>