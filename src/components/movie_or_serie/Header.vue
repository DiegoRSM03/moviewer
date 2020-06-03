<template>
<div id="header-movie-or-serie" class="container" :style="'background-image: url(' + URL_IMAGES + details.backdrop_path + ')'">
	<div class="transparent container">
		<div class="header content">
			<h1 v-if="details.title != null">{{details.title}}</h1>
			<h1 v-else>{{details.name}}</h1>

			<div class="info">
				<span><span class="flaticon-star"></span>{{ details.vote_average }} / 10</span>

				<span v-if="details.title != null"><span class="flaticon-popcorn-box"></span>{{ details.release_date }}</span>
				<span v-else><span class="flaticon-popcorn-box"></span>{{ details.first_air_date }}</span>

				<span><span class="flaticon-visibility"></span>{{ details.popularity }}</span>
			</div>
		</div>
		<p>{{details.overview}}</p>
	</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
	data() {
		return {
			details: []
		}
	},
	props: {
		id: String,
		section: String
	},
	computed: {
		...mapState([
			'URL_DB',
			'URL_IMAGES',
			'API_KEY'
		])
	},
	mounted () {
		axios
			.get(this.URL_DB + this.section + this.id + this.API_KEY)
			.then(response => (this.details = response.data))
	}
}
</script>