<template>
	<div>
		<!-- Caraousel -->
		<BCarousel
			:showContent="true"
			:mainText="'Healing for the Mind, Body, and Soul..'"
			:slideObjs="pageData.caraousel"
			:maxHeight="600"
			:rellaxNumber="1"
			class="mb-5 shadow"
			data-aos="fade-up"
		/>

		<!-- Star Details -->
		<BContainer class="mb-5 text-center">
			<BCard
				no-body
				bg-variant="primary"
				class="my-5 rounded-0 shadow"
				style="
					background-image: url('https://images2.imgbox.com/c2/ae/Wi5C61BU_o.jpg') !important;
					background-position: right;
				"
			>
				<div class="p-3 text-light bg-shade">
					<!-- Captions -->
					<h1 class="text-light hero-text">
						{{ pageData.headerDetails.caption1 }}
					</h1>
					
					<!-- Address -->
					<p
						v-if="pageData.headerDetails.hoursOfOperation.length > 0"
						class="h6 mb-4 text-center font-weight-bold text-secondary"
					>Our Hours</p>
					
					<!-- Hours of Operation -->
					<ul
						v-if="pageData.headerDetails.hoursOfOperation.length > 0"
						class="m-0 mb-4 p-0 text-dark"
					>
						<li
							v-for="(hoo, index) in pageData.headerDetails.hoursOfOperation"
							:key="index"
							class="m-0 list-unstyled text-center"
						><p class="h6">{{ hoo.days }}<br>{{ hoo.hours }}</p></li>
					</ul>

					<h4 class="mb-3 text-light">{{ pageData.headerDetails.text }}</h4>

					<RouterLink to="/book">
						<BButton size="lg" variant="secondary" class="">
							Contact Us
						</BButton>
					</RouterLink>
				</div>
			</BCard>
		</BContainer>

		<!-- About Balance Within -->
		<BContainer fluid class="bg-white border-top border-secondary">
			<BContainer class="py-5">
				<BRow>
					<BCol cols="12" md="4" class="d-none d-md-block">
						<div class="text-center">
							<img
								:src="pageData.bodyDetails.row0.image"
								class="w-100"
								style="max-width: 300px;"
							>
						</div>
					</BCol>

					<BCol cols="12" md="8">
						<div v-if="show" data-aos="fade-up">
							<h1 class="text-center text-primary fancy-text">
								{{ pageData.bodyDetails.row0.header }}
							</h1>
							<br>
							<p
								v-html="pageData.bodyDetails.row0.aboutCompanyHTML"
								class="mb-4 h5 text-dark"
							></p>

							<div class="text-center">
								<RouterLink to="/services">
									<BButton
										size="lg"
										variant="secondary"
										class="mt-3 shadow"
									>Check Out All of Our Services</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

		<!-- About Me -->
		<BContainer fluid class="bg-white border-top border-secondary">
			<BContainer class="py-5">
				<BRow>
					<BCol cols="12" md="8" order="1" order-md="0">
						<div v-if="show" data-aos="fade-up">
							<h1 class="text-center text-primary fancy-text">
								{{ pageData.bodyDetails.row1.header }}
							</h1>
							<h5 class="text-center text-secondary">
								{{ pageData.bodyDetails.row1.header2 }}
							</h5>
							<br>
							<p
								v-html="pageData.bodyDetails.row1.messageHTML"
								class="mb-4 h5 text-dark"
							></p>

							<div class="w-100 text-center">
								<RouterLink to="/our-team">
									<BButton
										variant="secondary"
										size="lg"
										class="mb-4 shadow"
									>Read More</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>

					<!-- Pamela Image -->
					<BCol cols="12" md="4" order="0" order-md="1">
						<div v-if="show">
							<BCarousel
								v-if="show"
								:slideObjs="pageData.bodyDetails.row1.caraousel"
								:maxHeight="600"
								class="mb-3"
							/>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

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
							<h1 class="my-5 text-center text-light">
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
	import PageService from '../services/PageService'
	import pageData from '@/defaults/pages'
	import BCarousel from '@/components/display/BCarousel'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			BCarousel,
		},

		data() {
			return {
				pageData: pageData,
				reqData: {},
				show: false,
				reikiTitle: 'Reiki Title',
				reikiDescription: 'Reiki description goes here',
				services: [],
			}
		},

		async created() {
			this.reqData = await PageService.s_()

			if (this.reqData.status) {
				this.reikiTitle = this.reqData.reikiTitle
				this.reikiDescription = this.reqData.reikiDescription
				this.services = this.reqData.services
			}
		},

		mounted() {
			this.show = true
		},

		methods: {
			redirectCompanyInfo() { router.push({ name: 'book' }) },
		},
	}
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }

	.hero-text {
		font-family: 'Caveat', cursive !important;
	}

	.fancy-text {
		font-family: 'Caveat', cursive !important;
	}
</style>
