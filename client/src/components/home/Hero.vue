<template>
	<!-- Slide Holder -->
	<div class="slider-holder">
		<VueTinySlider v-bind="options" class="slider">
			<div v-for="(s, i) in slides" :key="i" class="slide">
				<!-- Slide Content -->
				<div class="slide-content">
					<img
						:src="s.img"
						class="w-100"
						v-rellax
						data-rellax-xs-speed="0"
						data-rellax-mobile-speed="0"
						data-rellax-tablet-speed="0"
						:data-rellax-desktop-speed="
							$store.state.window.innerWidth >= 1367 ? -9 : -3
						"
					>
					
					<!-- Slide Content Center -->
					<div class="slide-center">
						<div class="shadow bg-shade center-float">
							<!-- Slide Text -->
							<h1
								class="
									m-0
									p-1
									p-sm-3
									font-weight-light
									text-white
									border border-white
									slide-text
								"
							>{{ s.text }}</h1>
						</div>
					</div>
				</div>
			</div>
		</VueTinySlider>

		<!-- PUT IN CENTER OF SLIDER -->
		<div class="text-center slider-center">
			<SocialMediaPlug
				size="2.5x"
				variant="primary"
				class="d-none d-sm-block mx-auto my-3 py-2 rounded bg-shade-darker"
				style="max-width: 130px;"
			/>

			<a :href="companyInfo.googleMapsLink" target="_blank">
				<BButton variant="dark" size="lg" class="shadow">
					<h3 class="m-0 google-maps-btn-text">
						<MapPinIcon size="1x" />
						Google Maps
					</h3>
				</BButton>
			</a>
		</div>
	</div>
</template>

<script>
	// [PERSONAL] //
	import { MapPinIcon } from 'vue-feather-icons'
	import VueTinySlider from 'vue-tiny-slider'

	// [IMPORT] Personal //
	import companyInfo from '../../defaults/companyInfo'
	import SocialMediaPlug from '../SocialMediaPlug'

	export default {
		props: {
			showContent: {
				type: Boolean,
				default: false,
			},

			slides: {
				type: Array,
				required: true,
			},
		},

		data() {
			return {
				companyInfo: companyInfo,

				slide: 0,
				sliding: null,
				currentSlid: null,

				mainText: 'The Boys Are Back In Town!',

				options: {
					mouseDrag: true,
					loop: true,
					controls: false,
					swipeAngle: false,
					nav: false,
					autoplay: true,
					autoplayButtonOutput: false,
					items: 1,
					autoplayTimeout: 3000,
					speed: 1000,
				},
			}
		},

		components: {
			MapPinIcon,
			VueTinySlider,
			SocialMediaPlug,
		},
	}
</script>

<style lang="scss" scoped>
	.slider-holder {
		position: relative;
		text-align: center;
	}

	.slider-center {
		position: absolute;
		top: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.slider {
		> .slide {
			max-height: 100vh;
			overflow: hidden;
		}
	}

	.slide-content {
		position: relative;
		text-align: center;
	}

	.slide-center {
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);

		@media (min-width: 768px) { top: 50%; }

		@media (min-width: 992px) { top: 45%; }
		
		@media (min-width: 1200px) { top: 40%; }

		@media (min-width: 1400px) { top: 35%; }
	}

	.slide-text {
		font-size: 1em;
		border-width: 1px !important;

		@media (min-width: 768px) {
			font-size: 2em;
			border-width: 2px !important;
		}

		@media (min-width: 992px) {
			font-size: 3em;
			border-width: 4px !important;
		}

		@media (min-width: 1200px) {
			font-size: 4em;
			border-width: 6px !important;
		}

		@media (min-width: 1400px) {
			font-size: 5em;
			border-width: 6px !important;
		}
	}

	.center-float {
		// Only Move images on screen abouve 800px //
		@media (min-width: 800px) {
			-webkit-animation: mover 1.5s infinite  alternate;
			animation: mover 1.5s infinite  alternate;
		}
	}

	.google-maps-btn-text {
		font-size: 3vw !important;

		@media screen and (min-width: 1600px) {
			font-size: 2em !important;
		}
	}

	@-webkit-keyframes mover {
		0% { transform: translateY(0); }
		100% { transform: translateY(-30px); }
	}
	@keyframes mover {
		0% { transform: translateY(0); }
		100% { transform: translateY(-30px); }
	}
</style>