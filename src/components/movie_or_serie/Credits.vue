<template>
<div id="credits" class="container">
	<div class="content">
		<h1>Characters</h1>
		<div class="characters">
			<div class="character" v-for="character in credits" :key="character.id">
				<img v-if="character.profile_path != null" :src="URL_IMAGES + character.profile_path + API_KEY">
				<div class="without-img" v-else>
					<span class="iconfont flaticon-person"></span>
					<span class="sorry">Sorry, this actor doesn't have profile poster</span>
				</div>

				<div class="label">
					<h2>{{ character.name }}</h2>
					<h3>{{ character.character }}</h3>
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
	name: 'Credits',
	data() {
		return {
			credits: []
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
			.get(this.URL_DB + this.section + this.$route.params.id + '/credits' + this.API_KEY)
			.then(response => (this.credits = response.data.cast))
	},
}
</script>