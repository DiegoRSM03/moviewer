<template>
<div id="movies">
	<SliderSections section="movies"></SliderSections>
	<MoviesOrSeries section="movies"></MoviesOrSeries>
</div>
</template>

<script>
import SliderSections from '@/components/SliderSections.vue'
import MoviesOrSeries from '@/components/MoviesOrSeries.vue'

export default {
	name: 'Movies',
	components: {
		SliderSections,
		MoviesOrSeries
	}
}
</script>