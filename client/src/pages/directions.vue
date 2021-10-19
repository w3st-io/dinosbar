<template>
	<BContainer class="my-4">
		<BCard bg-variant="light" class="mt-3 shadow">
			<BRow>
				<BCol cols="12" class="my-3 text-center">
					<h1 class="text-center font-weight-bold text-primary">{{ DPage.title }}</h1>
				</BCol>

				<BCol cols="12" class="text-center">		
					<a
						:href="DPage.googleMapsLink"
						class="mt-5 text-secondary"
					><p class="h2">{{ DPage.address }}</p></a>

					<a :href="DPage.googleMapsLink" class="text-secondary">
						<BButton variant="secondary" size="lg" class="my-3">
							<MapPinIcon size="1x" />
							{{ DPage.buttonText }}
						</BButton>
					</a>
					
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.4070283729443!2d-74.0447317845898!3d40.884885579313426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fa1cda6354b3%3A0x7fa57b79e40217a0!2s3%20Banta%20Pl%2C%20Hackensack%2C%20NJ%2007601!5e0!3m2!1sen!2sus!4v1614232869636!5m2!1sen!2sus" 
						width="600" height="450"
						allowfullscreen="true"
						loading="lazy"
						class="w-100 shadow"
						style="border: 0;"
					></iframe>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import DPage from '@/defaults/pages/directions'

	export default {
		components: {
			MapPinIcon
		},

		data() {
			return {
				DPage: DPage,
			}
		},
	}
</script>