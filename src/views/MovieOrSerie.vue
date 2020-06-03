<template>
<transition name="slide-down">
<div id="movie-or-serie">
	<Header :id="id" :section="section"></Header>
	<TabHandler :id="id" :section="section"></TabHandler>
</div>
</transition>
</template>

<script>
import Header from '@/components/movie_or_serie/Header.vue'
import TabHandler from '@/components/movie_or_serie/TabHandler.vue'

export default {
	components: {
		Header,
		TabHandler
	},
	props: {
		id: String,
		section: String
	},
}
</script>