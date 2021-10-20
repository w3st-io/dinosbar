<template>
	<div>
		<VueTinySlider v-bind="options" class="slider">
			<div>
				<img :src="slides[0].img" class="w-100">
			</div>
			<div>
				<img :src="slides[1].img" class="w-100">
			</div>
			<div>
				<img :src="slides[2].img" class="w-100">
			</div>
		</VueTinySlider>
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
				default: 0,
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
					gutter: 20,
					autoplayTimeout: 3000,
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
	.content {
		background: rgba(0, 0, 0, 0.30);
	}

	.slider {
		div {
			max-height: 100vh;
			overflow: hidden;
		}
	}
</style>