<template>
<div id="home">
	<SliderSections section="home"></SliderSections>
	<div class="header-movies">
		<h2>Movies Online</h2>
		<div class="menu">
			<a href="">Latest</a>
			<a href="">Popular</a>
			<a href="">Upcoming</a>
		</div>
	</div>
</div>
</template>

<script>
import SliderSections from '@/components/SliderSections.vue'

export default {
	name: 'Home',
	components: {
		SliderSections
	}
}
</script>
