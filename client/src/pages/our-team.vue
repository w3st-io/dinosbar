<template>
	<div>
		<Parallax
			:imgURL="pageData.parallax"
			:height="280"
			:text="pageData.pageTitle"
			data-aos="fade-up"
			:parallaxNumber="0"
		/>	

		<BContainer class="my-4">
			<BRow
				class="mb-3"
				v-rellax
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				data-rellax-tablet-speed="0"
				data-rellax-desktop-speed="2"
			>
				<BCol
					v-for="(col, index) in pageData.r1.cx"
					:key="index"
					cols="12" sm="12" md="12" lg="12"
					class="mb-3"
				>
					<BCard class="shadow" data-aos="fade" no-body>
						<BRow>
							<BCol cols="12">
								<h3 class="mt-3 text-center text-primary">{{ col.title }}</h3>
								<hr class="bg-secondary">
							</BCol>

							<BCol cols="12" sm="12" md="6" lg="8" order="2" order-md="1">
								<p v-html="col.description" class="mb-4 px-3"></p>
							</BCol>

							<!-- Owner Picture -->
							<BCol cols="12" sm="12" md="6" lg="4" class="" order="1" order-md="2">
								<div class="mb-3 px-3">
									<img
										:src="col.image"
										alt="Pamela Richardson Image"
										class="w-100 rounded border border-4 border-secondary shadow"
										style="border-width: 4px !important;"
									>
								</div>
							</BCol>
						</BRow>
					</BCard>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import Parallax from '@/components/display/Parallax'
	import pageData from '@/defaults/pages/our-team'

	export default {
		components: {
			Parallax
		},

		data() {
			return {
				pageData: pageData
			}
		},
	}
</script>