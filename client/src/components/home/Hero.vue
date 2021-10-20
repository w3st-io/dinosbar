<template>
	<div>
		<div class="img-holder">
			<VueTinySlider v-bind="options" class="slider">
				<div class="slide">
					<div class="img-holder">
						<img
							:src="slides[0].img"
							class="w-100"
							v-rellax
							data-rellax-xs-speed="0"
							data-rellax-mobile-speed="0"
							data-rellax-tablet-speed="0"
							:data-rellax-desktop-speed="rellaxNumber"
						>

						<div class="img-center">
							<div>
								<h1
									class="m-0 p-3 font-weight-light text-light border border-light"
									style="
										font-size: 7em;
										border-width: 10px !important;
									"
								>DINO'S BAR & GRILL</h1>
							</div>
						</div>
					</div>
				</div>
				
				<div class="slide">
					<div class="img-holder">
						<img
							:src="slides[1].img"
							class="w-100"
							v-rellax
							data-rellax-xs-speed="0"
							data-rellax-mobile-speed="0"
							data-rellax-tablet-speed="0"
							:data-rellax-desktop-speed="rellaxNumber"
						>

						<div class="img-center">
							<div>
								<h1
									class="m-0 p-3 font-weight-light text-light border border-light"
									style="
										font-size: 7em;
										border-width: 10px !important;
									"
								>GREAT FOOD</h1>
							</div>
						</div>
					</div>
				</div>

				<div class="slide">
					<div class="img-holder">
						<img
							:src="slides[2].img"
							class="w-100"
							v-rellax
							data-rellax-xs-speed="0"
							data-rellax-mobile-speed="0"
							data-rellax-tablet-speed="0"
							:data-rellax-desktop-speed="rellaxNumber"
						>

						<div class="img-center">
							<div>
								<h1
									class="m-0 p-3 font-weight-light text-light border border-light"
									style="
										font-size: 7em;
										border-width: 10px !important;
									"
								>SPORTS & MUSIC</h1>
							</div>
						</div>
					</div>
				</div>
			</VueTinySlider>

			<div class="img-center">
			
			</div>
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
				default: -8,
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
				}
			}
		},

		components: {
			VueTinySlider
		},

		methods: {
			onSlideStart(slide) {
				this.currentSlid = slide
				this.sliding = true
			},

			onSlideEnd(slide) {
				this.currentSlid = slide
				this.sliding = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slider {
		> .slide {
			max-height: 100vh;
			overflow: hidden;
		}
	}

	.img-holder {
		position: relative;
		text-align: center;
	}

	.img-center {
		background-color: rgba(0, 0, 0, 0.4);
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
	
	}
</style>