<template>
	<div cols="12" class="py-1 hero-container">
		<div class="p-2 gallery-center bg-shade hero-text">
			<h1 class="text-light">The Boys Are Back In Town!</h1>
		</div>
		
		<BRow>
			<BCol
				cols="12" sm="6"
				class="p-1"
			>
				<div class="position-relative box-size">
					<img :src="backgroundImgs[0]" alt="" class="w-100">
					<div class="black-shade"></div>
				</div>
			</BCol>
			
			<BCol
				cols="12" sm="6"
				class="p-1"
			>
				<div class="position-relative box-size">
					<img :src="backgroundImgs[1]" alt="" class="w-100">
					<div class="red-shade"></div>
				</div>
			</BCol>

			<BCol
				cols="12" sm="6"
				class="p-1"
			>
				<div class="position-relative box-size">
					<img :src="backgroundImgs[2]" alt="" class="w-100">
					<div class="red-shade"></div>
				</div>
			</BCol>
			
			<BCol
				cols="12" sm="6"
				class="p-1"
			>
				<div class="position-relative box-size">
					<img :src="backgroundImgs[3]" alt="" class="w-100">
					<div class="black-shade"></div>
				</div>
			</BCol>
		</BRow>
	</div>
</template>

<script>
	export default {
		props: {
			backgroundImgs: {
				type: Array,
				required: true,
			},
		},

		methods: {
			randomFade() {
				const fade = ['fade-up', 'fade-down', 'fade-left', 'fade-right']

				const randomNum = Math.floor(Math.random() * 3)

				return fade[randomNum]
			},

			randomDelay() { return Math.floor(Math.random() * 10) * 100 },
		},
	}
</script>

<style lang="scss" scoped>
	.hero-container {
		max-height: 600px;
		overflow: hidden;

		@media (max-width: 990px) {
			max-height: 400px;
		}
	}

	.gallery-center {
		z-index: 100;
		position: absolute;
		top: 35%;
		left: calc(50% - 219px);
		transform: translate(-0%, -50%);
	}

	.hero-text {
		background: rgba(0, 0, 0, 0.48);

		// Only Move images on screen abouve 800px //
		@media (min-width: 800px) {
			-webkit-animation: mover 1.5s infinite  alternate;
			animation: mover 1.5s infinite  alternate;
		}
	}

	.box-size {
		max-height: 300px;
		overflow: hidden;
	}

	.red-shade {
		width: 100%;
		height: 100%;
		background: rgba(119, 0, 0, 0.50);
		position: absolute;
		top: 0;
		left: 0;
	}

	.black-shade {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 0;
		left: 0;
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