<template>
<div id="app">
	<nav class="container">
		<div class="content">
			<div class="title">
				<span class="flaticon-film-reel logo"></span>
				<a href="/home"><span>MoVie</span>Wer</a>
			</div>
			<div class="links">
				<span>Categories<span class="flaticon-down-arrow"></span></span>
				<router-link to="/home">Home</router-link>
				<router-link to="/movies">Movies</router-link>
				<router-link to="/series">Series</router-link>
			</div>
		</div>
	</nav>
	<transition name="slide-fade">
		<router-view/>
	</transition>
</div>
</template>

<style lang="sass">

@import './assets/sass/styles.sass'
@import './assets/iconfonts/flaticon.css'

@font-face
	font-family: 'Mukta'
	src: url('./assets/fonts/Mukta-Regular.ttf')

@font-face
	font-family: 'Mukta Light'
	src: url('./assets/fonts/Mukta-Light.ttf')

@font-face
	font-family: 'Mukta Bold'
	src: url('./assets/fonts/Mukta-Bold.ttf')

@font-face
	font-family: 'Mukta ExtraBold'
	src: url('./assets/fonts/Mukta-ExtraBold.ttf')

</style>
