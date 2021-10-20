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
							$store.state.window.innerWidth > 1366 ? -9 : -3
						"
					>
					
					<!-- Slide Content Center -->
					<div class="slide-center">
						<div class="shadow bg-shade center-float">
							<!-- Slide Text -->
							<h1
								class="
									m-0
									p-3
									font-weight-light
									text-light
									border border-light
									slide-text
								"
							>{{ s.text }} {{ $store.state.window.innerWidth }}</h1>
						</div>
					</div>
				</div>
			</div>
		</VueTinySlider>

		<!-- PUT IN CENTER OF SLIDER -->
		<div class="slider-center">
			<BButton variant="light" size="lg">DIRECTIONS!</BButton>
		</div>
	</div>
</template>

<script>
	import VueTinySlider from 'vue-tiny-slider'

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

			rellaxNumber: {
				type: Number,
				default: -6,
			},
		},

		data() {
			return {
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
			VueTinySlider
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
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);

		// On screen below 1200px //
		@media (max-width: 1400px) { top: 35%; }
		
		// On screen below 1200px //
		@media (max-width: 1200px) { top: 40%; }

		// On screen below 992px //
		@media (max-width: 992px) { top: 45%; }

		// On screen below 768px //
		@media (max-width: 768px) { top: 50%; }
	}

	.slide-text {
		font-size: 6em;
		border-width: 10px !important;

		// On screen below 1200px //
		@media (max-width: 1400px) {
			font-size: 4em;
			border-width: 8px !important;
		}
		
		// On screen below 1200px //
		@media (max-width: 1200px) {
			font-size: 3em;
			border-width: 6px !important;
		}

		// On screen below 992px //
		@media (max-width: 992px) {
			font-size: 2em;
			border-width: 4px !important;
		}

		// On screen below 768px //
		@media (max-width: 768px) {
			font-size: 1em;
			border-width: 2px !important;
		}
	}

	.center-float {
		// Only Move images on screen abouve 800px //
		@media (min-width: 800px) {
			-webkit-animation: mover 1.5s infinite  alternate;
			animation: mover 1.5s infinite  alternate;
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