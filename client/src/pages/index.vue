<template>
	<div v-if="loading == false">
		<Hero
			:slides="pageData.caraousel"
			:maxHeight="1000"
			class=""
		/>

		<!-- About Dinos Bar & Grill -->
		<BContainer fluid class="">
			<BContainer class="py-5">
				<About />
			</BContainer>
		</BContainer>

		<!-- MENU -->
		<BContainer fluid class="py-5 bg-white">
			<Menu />
		</BContainer>

		<!-- REVIEWS -->
		<Reviews />

		<!-- FOOD IMAGES -->
		<FoodImages
			:images="[
				'https://images2.imgbox.com/c4/10/iDBl4xhG_o.jpg',
				'https://images2.imgbox.com/41/e3/CeI2oMmZ_o.jpg',
				'https://images2.imgbox.com/3c/54/nB7dUa9T_o.jpg',
				'https://images2.imgbox.com/bd/92/6rUWWZ64_o.jpg',
				'https://images2.imgbox.com/64/4a/kv6E0DkI_o.jpg',
				'https://images2.imgbox.com/9e/75/FVNJaOwT_o.jpg',
				'https://images2.imgbox.com/ed/7a/Em86ViCk_o.jpg',
				'https://images2.imgbox.com/e7/0b/e0wkwu8J_o.jpg',
				'https://images2.imgbox.com/22/63/MSDjcNtv_o.jpg',
				'https://images2.imgbox.com/69/35/A5MBYgnS_o.jpg',
				'https://images2.imgbox.com/14/f7/7MegnUg5_o.jpg',
				'https://images2.imgbox.com/3c/b2/30ZURsrn_o.jpg',
				'https://images2.imgbox.com/31/c8/6GD8j9X8_o.jpg',
				'https://images2.imgbox.com/80/4c/SQd9l4fz_o.jpg',
				'https://images2.imgbox.com/ae/e6/xlYuj6z7_o.jpg',

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
	import Menu from '@/components/Menu'
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
