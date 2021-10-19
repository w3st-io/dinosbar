<template>
	<div id="app">
		<!-- UI -->
		<NavBar />

		<!-- RouterView -->
		<RouterView />

		<!-- Footer -->
		<Footer />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import NavBar from "@/components/nav/NavBar"
	import Footer from "@/components/nav/Footer"

	export default {
		components: {
			NavBar,
			Footer,
		}
	}
</script>

<style lang="scss">
	// [IMPORT] // heading // * //
	@import url('https://fonts.googleapis.com/css2?family=Balthazar&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Hahmlet&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

	* { font-family: 'Raleway', serif !important; }
	h1,h2,h3,h4,h5,h6 { font-family: 'Raleway', sans-serif !important; }
</style>