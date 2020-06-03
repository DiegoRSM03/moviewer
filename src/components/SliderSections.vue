<template>
<transition name="slide-fade">
<div id="slider-sections">
	<div class="container">
		<div class="slider" :style="`background-image: url(${URL_IMAGES}${moviesOrSeries[item-1].backdrop_path});`" v-for="item in 5" :key="item.id">
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

						<div class="button-watch">
							<div class="buttons-watch">
								<span v-if="sectionName == 'movie'"><span class="flaticon-clapperboard"></span>WATCH THE MOVIE</span>
								<span v-else><span class="flaticon-clapperboard"></span>WATCH THE SERIE</span>

								<a :href="`/${sectionName}/${moviesOrSeries[item-1].id}`" ><span class="flaticon-popcorn-box"></span> WATCH !</a>
							</div>
						</div>

					</div>
					<div class="slider-buttons">
						<span @click="sliderButton('prev')" v-if="item-1 != 0" class="flaticon-left-arrow"></span>
						<template v-if="item-1 != 0">
							<div v-if="item-1 != 4" class="line"></div>
						</template>
						<span @click="sliderButton('next')" v-if="item-1 != 4" class="flaticon-right-arrow"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</transition>
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
		]),
		sectionName () {
			if (this.section == 'home') {
				return 'movie'
			} else {
				return this.section.substring(0, this.section.length-1)
			}
		}
	},
	methods: {
		sliderButton (operation) {
			let slider = document.querySelector('#slider-sections .container').style
			if (slider.marginLeft == "") {
				slider.marginLeft = "0%"
			}
			let marginString = slider.marginLeft.substring(0, slider.marginLeft.length - 1)
			
			let newMargin
			(operation == 'next') 
				? newMargin = parseInt(marginString) - 100
				: newMargin = parseInt(marginString) + 100

			slider.marginLeft = `${newMargin.toString()}%`
		}
	},
	mounted () {
		switch (this.section) {
			case 'home':
				axios
					.get(this.URL_DB + 'movie/upcoming' + this.API_KEY)
					.then(response => (this.moviesOrSeries = response.data.results))
				break
			case 'movies':
				axios
					.get(this.URL_DB + 'movie/popular' + this.API_KEY)
					.then(response => (this.moviesOrSeries = response.data.results))
				break
			case 'series':
				axios
					.get(this.URL_DB + 'tv/airing_today' + this.API_KEY)
					.then(response => (this.moviesOrSeries = response.data.results))
				break
		}
	},
}
</script>