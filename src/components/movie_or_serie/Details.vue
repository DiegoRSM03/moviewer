<template>
<div id="details" class="container">
	<div class="content">
		<div class="header">
			<h1 v-if="details.original_title != null">{{ details.original_title }}</h1>
			<h1 v-else>{{ details.original_name }}</h1>

			<span>{{ details.status }}</span>
		</div>
		<div class="tagline">
			<p>{{ details.tagline }}</p>
		</div>
		<div class="more-info">
			<div class="genres">
				<h2>Genres</h2>
				<ul>
					<li v-for="genre in details.genres" :key="genre.id">
						{{ genre.name }}
					</li>
				</ul>
			</div>
			<div class="production-companies">
				<h2>Production Companies</h2>
				<ul>
					<li v-for="company in details.production_companies" :key="company.id">
						{{ company.name }}
					</li>
				</ul>
			</div>
			<div v-if="details.production_countries != null" class="production-countries">
				<h2>Production Countries</h2>
				<ul>
					<li v-for="country in details.production_countries" :key="country.name">
						{{ country.name }}
					</li>
				</ul>
			</div>
			<div v-else class="networks">
				<h2>Networks</h2>
				<ul>
					<li v-for="network in details.networks" :key="network.id">
						{{ network.name }} ({{network.origin_country}})
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
	name: 'Details',
	data() {
		return {
			details: []
		}
	},
	props: {
		section: String
	},
	computed: {
		...mapState([
			'URL_DB',
			'API_KEY'
		])
	},
	mounted () {
		axios
			.get(this.URL_DB + this.section + this.$route.params.id + this.API_KEY)
			.then(response => (this.details = response.data))
	},
}
</script>