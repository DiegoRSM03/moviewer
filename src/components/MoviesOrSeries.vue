<template>
<div id="movies-or-series" class="container">
	<div class="content">

		<div class="header-section">
			<div class="title">{{subSection}} {{section}}</div>
			<div :class="'options-'+section">

				<template v-if="section === 'movies'">
					<button @click="changeSubSection('Now Playing')">Now Playing</button>
					<div class="line"></div>
					<button @click="changeSubSection('Popular')">Popular</button>
					<div class="line"></div>
					<button @click="changeSubSection('Upcoming')">Upcoming</button>
				</template>

				<template v-else>
					<button @click="changeSubSection('Airing Today')">Airing Today</button>
					<div class="line"></div>
					<button @click="changeSubSection('Popular')">Popular</button>
					<div class="line"></div>
					<button @click="changeSubSection('Top Rated')">Top Rated</button>
				</template>
				
			</div>
		</div>

		<div :class="'section-'+section">
			<Poster
				:section="section"
				:info="item"

				v-for="item in moviesOrSeries"
				:key="item.id">
			</Poster>
		</div>

		<div :class="'pagination-'+section">
			<button @click="paginationButton('prev')"><span class="flaticon-left-arrow"></span></button>
			<div class="pages">
				{{ currentPage }} of {{ totalPages }}
			</div>
			<button @click="paginationButton('next')"><span class="flaticon-right-arrow"></span></button>
		</div>

	</div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Poster from '@/components/Poster.vue'

export default {
	data() {
		return {
			moviesOrSeries: [],
			currentPage: 0,
			subSection: 'Popular',
			totalPages: 0
		}
	},
	components: {
		Poster,
	},
	props: {
		section: String,
	},
	computed: {
		...mapState([
			'URL_DB',
			'URL_IMAGES',
			'API_KEY'
		])
	},
	methods: {
		changeSubSection (subSection) {
			this.subSection = subSection
			let querySection

			this.section == 'series' ? querySection = 'tv' : querySection = 'movie'
			let querySubSection = querySection

			switch (subSection) {
				case 'Now Playing':
					querySubSection += '/now_playing'
					break
				case 'Popular':
					querySubSection += '/popular'
					break
				case 'Upcoming':
					querySubSection += '/upcoming'
					break
				case 'Airing Today':
					querySubSection += '/airing_today'
					break
				case 'Top Rated':
					querySubSection += '/top_rated'
					break
			}
			
			this.currentPage = 1
			axios
				.get(this.URL_DB + querySubSection + this.API_KEY + `&page=${this.currentPage}`)
				.then(response => (this.moviesOrSeries = response.data.results))
		},
		paginationButton (action) {
			let querySection

			this.section == 'movies'
				? querySection = 'movie/popular'
				: querySection = 'tv/popular'

			if (action === 'next') {
				this.currentPage++
			} else {
				this.currentPage--
			}

			axios
				.get(this.URL_DB + querySection + this.API_KEY + `&page=${this.currentPage}`)
				.then(response => response.data)
				.then(data => {
					this.moviesOrSeries = data.results
					this.totalPages = data.total_pages
				})
		}
	},
	mounted () {
		this.paginationButton('next')
	},
}
</script>