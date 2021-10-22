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
				<BRow class="py-5">
					<BCol cols="12" md="6">
						<div>
							<h1 class="text-center font-weight-bold">
								{{ pageData.bodyDetails.row0.header }}
							</h1>
							<h6 class="text-center text-muted">
								{{ pageData.companyInfo.companyCaption1 }}
							</h6>
							<br>
							<p
								v-html="pageData.companyInfo.aboutHTML"
								class="mb-4 h5 text-dark"
								data-aos="fade-up"
							></p>
							<div class="text-center">
								<img
								:src="signImage"
								class="w-100"
								style="max-width: 200px;"
							>
							</div>
						</div>
					</BCol>

					<BCol cols="12" md="6" class="d-none d-md-block">
						<div class="text-center">
							<img
								:src="pageData.bodyDetails.row0.image"
								class="w-100"
								style="max-width: 600px;"
							>
						</div>
					</BCol>

				</BRow>
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
	import ContactInfo from '@/components/home/ContactInfo'
	import FoodImages from '@/components/home/FoodImages'
	import Hero from '@/components/home/Hero'
	import MapAndLocation from '@/components/home/MapAndLocation'
	import Menu from '@/components/home/Menu'
	import Reviews from '@/components/home/Reviews'
	import pageData from '@/defaults/pages'
	import router from '@/router'
	import PageService from '@/services/PageService'

	export default {
		name: 'Home',

		components: {
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
				signImage: require('../assets/images/pages/index/sign.png')
			}
		},

		methods: {
			async getPageData() {
				this.reqData = await PageService.s_()

				if (this.reqData.status) {
					this.reikiTitle = this.reqData.reikiTitle
					this.reikiDescription = this.reqData.reikiDescription
					this.services = this.reqData.services
				}

				this.loading = false
			},

			redirectCompanyInfo() { router.push({ name: 'book' }) },
		},

		async created() {
			this.$store.state.isHomePage = true

			await this.getPageData()
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
