<template>
<div :id="movieOrSerie + '-' + info.id" class="movie-or-serie" :class="section">
	<div :class="'poster-' + movieOrSerie">
		<div class="poster-container">
			<div class="poster-img">
				<img v-if="info.poster_path !== null" :src="URL_IMAGES + info.poster_path + API_KEY" alt="">
				<div v-else class="without-img">
					<span class="flaticon-clapperboard"></span>
					<p>Sorry! This movie doesn't have any poster</p>
				</div>
			</div>
			<a :href="`/${movieOrSerie}/${info.id}`" class="poster-description">
				<span class="title"><span class="flaticon-popcorn-box"></span>WATCH!</span>
				<p>{{ getShortDescription(info.overview) }}</p>
				<span class="flaticon-clapperboard transparent"></span>
			</a>
		</div>
	</div>
	<div class="info">
		<template v-if="info.title != null">
			<span :class="'year-' + section">{{ getYear(info.release_date) }}</span>
			<span :class="'title-' + section">{{ getShortTitle(info.title) }}</span>
		</template>
		<template v-else>
			<span class="year-series">{{ getYear(info.first_air_date) }}</span>
			<span class="title-series">{{ getShortTitle(info.name) }}</span>
		</template>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	props: {
		idPoster: String,
		section: String,
		info: Object
	},
	computed: {
		...mapState([
			'URL_DB',
			'URL_IMAGES',
			'API_KEY'
		]),
		movieOrSerie () {
			return this.section.substring(0, this.section.length -1)
		}
	},
	methods: {
		getYear (date) {
			return date.substring(0, 4)
		},
		getShortTitle (title) {
			if (title.length > 18) {
				return title.substring(0,18) + '...'
			} else {
				return title
			}
		},
		getShortDescription (description) {
			if (description.length > 250) {
				return description.substring(0,250) + '...'
			} else {
				return description
			}
		},
	},
}
</script>