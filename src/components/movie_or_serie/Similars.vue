<template>
<div id="similars" class="container">
	<div class="content">
		<h1>Similars</h1>
		<div class="carrousel">
			<div class="container-similars">	
				<Poster
					:section="section"
					:info="similar"

					v-for="similar in similars"
					:key="similar.id">
				</Poster>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Poster from '@/components/Poster.vue'

export default {
	name: 'Similars',
	data() {
		return {
			similars: []
		}
	},
	components: {
		Poster,
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
			.get(this.URL_DB + this.section + this.$route.params.id + '/similar' + this.API_KEY)
			.then(response => (this.similars = response.data.results))
	},
}
</script>