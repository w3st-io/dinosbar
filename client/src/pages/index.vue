<template>
	<div v-if="loading == false">
		<Hero
			:slides="pageData.caraousel"
			:maxHeight="1000"
			class=""
		/>

		<!-- About Dinos Bar & Grill -->
		<BContainer fluid class="bg-white">
			<BContainer class="py-5">
				<About />
			</BContainer>
		</BContainer>

		<!-- MENU -->
		<BContainer fluid class="bg-white">
			<BContainer class="py-5">
				<Menu class="my-5" />
			</BContainer>
		</BContainer>

		<!-- REVIEWS -->
		<Reviews />

		<!-- FOOD IMAGES -->
		<FoodImages
			:images="[
				'https://images2.imgbox.com/c4/10/iDBl4xhG_o.jpg',
				'https://images2.imgbox.com/41/e3/CeI2oMmZ_o.jpg',
				'https://images2.imgbox.com/3c/54/nB7dUa9T_o.jpg',
				'https://images2.imgbox.com/bd/92/6rUWWZ64_o.jpg'
			]"
		/>

		<!-- MAP AND LOCATION -->
		<MapAndLocation />

		<!-- INFO -->
		<ContactInfo />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import About from '@/components/About'
	import ContactInfo from '@/components/ContactInfo'
	import FoodImages from '@/components/home/FoodImages'
	import Hero from '@/components/home/Hero'
	import MapAndLocation from '@/components/MapAndLocation'
	import Menu from '@/components/home/Menu'
	import Reviews from '@/components/home/Reviews'
	import pageData from '@/defaults/pages'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			About,
			ContactInfo,
			FoodImages,
			Hero,
			MapAndLocation,
			Menu,
			Reviews,
		},

		data() {
			return {
				loading: true,

				pageData: pageData,
				reqData: {},
				reikiTitle: 'Reiki Title',
				reikiDescription: 'Reiki description goes here',
				services: [],
			}
		},

		methods: {
			redirectCompanyInfo() { router.push({ name: 'book' }) },
		},

		async created() {
			this.$store.state.isHomePage = true

			this.loading = false			
		},

		destroyed() {
			this.$store.state.isHomePage = false
		},
	}
</script>

<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>
