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
								v-html="pageData.bodyDetails.row0.aboutCompanyHTML"
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

		<!-- About Dinos Bar & Grill -->
		<BContainer fluid class="bg-white">
			<BContainer class="py-5">
				<Menu class="my-5" />
			</BContainer>
		</BContainer>

		<!-- MENU -->
		<BRow class="m-0 p-0">
			<BCol cols="12" lg="4" order-lg="1" class="text-light bg-dark">
				<div class="p-xl-5">
					<div class="p-xl-5">
						<div class="p-lg-3 text-center">
							<div class="px-2 py-5 px-lg-0 py-lg-0">
								<h1 class="mb-4">Our Location</h1>
								<h3 class="mb-4">
									{{ pageData.companyInfo.address }}
								</h3>

								<BButton variant="light" size="lg">
									<h4 class="m-0">
										<MapPinIcon size="1x" variant="dark" />
										GOOGLE MAPS
									</h4>
								</BButton>
							</div>
						</div>
					</div>
				</div>
			</BCol>

			<BCol cols="12" lg="8" order-lg="0" class="m-0 p-0">
				<iframe
					:src="pageData.companyInfo.googleMapsEmbedLink"
					width="100%"
					height="100%"
					style="border: 0; min-height: 400px;"
					loading="lazy"
				></iframe>
			</BCol>			
		</BRow>
	</div>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import Hero from '../components/home/Hero'
	import Menu from '../components/home/Menu'
	import PageService from '../services/PageService'
	import pageData from '@/defaults/pages'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			MapPinIcon,
			Hero,
			Menu,
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
