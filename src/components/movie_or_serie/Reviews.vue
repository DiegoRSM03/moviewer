<template>
<div id="reviews" class="container">
	<div class="content">
		<h1>Reviews</h1>
		<ul v-if="reviews != ''" class="reviews-list">
			<li class="review" v-for="review in reviews" :key="review.id">
				<div class="img">
					<span class="flaticon-person"></span>
				</div>
				<div class="info">
					<h2>{{ review.author }}</h2>
					<p>{{ review.content }}</p>
				</div>
			</li>
		</ul>
		<h3 v-else>D'oh! Apparently there aren't reviews here</h3>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
	name: 'Reviews',
	data() {
		return {
			reviews: []
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
	mounted () {
		axios
			.get(this.URL_DB + this.section + this.$route.params.id + '/reviews' + this.API_KEY)
			.then(response => (this.reviews = response.data.results))
	},
}
</script>