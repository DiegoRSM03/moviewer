<template>
<div id="series">
	<SliderSections section="series"></SliderSections>
	<MoviesOrSeries section="series"></MoviesOrSeries>
</div>
</template>

<script>
import SliderSections from '@/components/SliderSections.vue'
import MoviesOrSeries from '@/components/MoviesOrSeries.vue'

export default {
	name: 'Series',
	components: {
		SliderSections,
		MoviesOrSeries
	}
}
</script>