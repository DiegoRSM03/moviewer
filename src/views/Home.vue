<template>
<div id="home">
	<SliderSections section="home"></SliderSections>
	<MoviesOrSeries section="movies"></MoviesOrSeries>
	<MoviesOrSeries section="series"></MoviesOrSeries>
</div>
</template>

<script>
import SliderSections from '@/components/SliderSections.vue'
import MoviesOrSeries from '@/components/MoviesOrSeries.vue'

export default {
	name: 'Home',
	components: {
		SliderSections,
		MoviesOrSeries
	}
}
</script>
