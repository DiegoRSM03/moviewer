<template>
<div class="tab-handler">
	<div class="tab-container container">
		<div class="tab content">
			<div class="tabs">
				<span
				@click="currentTab = index"
				v-for="(component, index) in componentsForTabs"
				:key="component.name"
				:id="component.name">
					{{ component.name }}
				</span>
			</div>
			<div class="components">
				<keep-alive>
					<component :is="componentsForTabs[currentTab]" :section="section"></component>
				</keep-alive>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import Details from '@/components/movie_or_serie/Details.vue'
import Similars from '@/components/movie_or_serie/Similars.vue'
import Credits from '@/components/movie_or_serie/Credits.vue'
import Reviews from '@/components/movie_or_serie/Reviews.vue'

export default {
	data() {
		return {
			componentsForTabs: [
				Details,
				Similars,
				Credits,
				Reviews
			],
			currentTab: 0
		}
	},
	watch: {
		//WATCHER PARA PINTAR EL COLOR DE LA SECCION
		currentTab (newTab, oldTab) {
			let unselectedTab = document.getElementById(this.componentsForTabs[oldTab].name)
			unselectedTab.style.backgroundColor = '#CCC'		// GRAY
			unselectedTab.style.borderTop = 'none'

			let selectedTab = document.getElementById(this.componentsForTabs[newTab].name)
			selectedTab.style.backgroundColor = '#FAFAFA'		// WHITE
			selectedTab.style.borderTop = '3px solid #829300'
		}
	},
	props: {
		id: String,
		section : String
	},
	mounted () {
		let tabOne = document.getElementById(this.componentsForTabs[0].name)
		tabOne.style.backgroundColor = '#FAFAFA'
		tabOne.style.borderTop = '3px solid #829300'
	},
}
</script>