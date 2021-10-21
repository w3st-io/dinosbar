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


		<iframe
			:src="pageData.companyInfo.googleMapsEmbedLink"
			width="100%"
			height="450"
			style="border: 0;"
			loading="lazy"
		></iframe>

		<!-- INTERESTED? -->
		<BContainer fluid class="px-0 py-3 bg-secondary">
			<BRow class="w-100 m-0 p-0">
				<BCol cols="12" md="2" class="d-none d-md-block p-0 text-left">
					<img
						src="https://images2.imgbox.com/c3/c3/XQ36FnwY_o.png"
						class="w-100 mt-5"
						style="max-width: 200px;"
					>
				</BCol>

				<BCol cols="12" md="8" class="m-auto">
					<BRow>
						<BCol cols="12">
							<h1 class="my-5 text-center text-white">
								Some Services We Provide
							</h1>
						</BCol>

						<BCol cols="12" md="6" class="d-flex align-items-stretch">
							<BCard
								bg-variant="secondary"
								text-variant="light"
								border-variant="muted"
								no-body
								tag="article"
								class="mb-5"
							>
								<div style="max-height: 200px; overflow:hidden;">
									<BCardImg
										:src="services[0].image"
										class="w-100 rounded-top"
									></BCardImg>
								</div>

								<BCardHeader>
									<h3 class="m-0 text-center">
										{{ services[0].title }}
									</h3>
								</BCardHeader>

								<BCardBody>{{ services[0].description }}</BCardBody>

								<BCardFooter class="">
									<RouterLink :to="`/services/${services[0].id}`">
										<BButton
											variant="outline-light"
											size="lg"
											class="w-100 my-3"
										>Read More</BButton>
									</RouterLink>
								</BCardFooter>
							</BCard>
						</BCol>

						<BCol cols="12" md="6" class="d-flex align-items-stretch">
							<BCard
								bg-variant="secondary"
								text-variant="light"
								border-variant="muted"
								no-body
								tag="article"
								class="mb-5"
							>
								<div style="max-height: 200px; overflow:hidden;">
									<BCardImg
										:src="services[1].image"
										class="w-100 rounded-top"
									></BCardImg>
								</div>

								<BCardHeader class="">
									<h3 class="m-0 text-center">
										{{ services[1].title }}
									</h3>
								</BCardHeader>

								<BCardBody>{{ services[1].description }}</BCardBody>

								<BCardFooter class="">
									<RouterLink :to="`/services/${services[1].id}`">
										<BButton
											variant="outline-light"
											size="lg"
											class="w-100 my-3"
										>Read More</BButton>
									</RouterLink>
								</BCardFooter>
							</BCard>
						</BCol>

						<BCol cols="12">
							<div class="text-center">
								<RouterLink to="/services">
									<BButton
										size="lg"
										variant="light"
										class="mb-5 shadow"
									>Check Out All of Our Services</BButton>
								</RouterLink>
							</div>
						</BCol>
					</BRow>
				</BCol>

				<BCol cols="12" md="2" class="p-0 text-right">
					<img
						src="https://images2.imgbox.com/11/93/PmJs689J_o.png"
						class="w-100 mt-5"
						style="max-width: 200px;"
					>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import Hero from '../components/home/Hero'
	import Menu from '../components/home/Menu'
	import PageService from '../services/PageService'
	import pageData from '@/defaults/pages'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
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
