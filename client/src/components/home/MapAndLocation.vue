<template>
	<BRow class="m-0 p-0">
		<BCol cols="12" lg="4" order-lg="1" class="text-light bg-dark">
			<div class="p-xl-5">
				<div class="p-xl-5">
					<div class="p-lg-3 text-center">
						<div class="px-2 py-5 px-lg-0 py-lg-0">
							<h1 class="mb-4">Our Location</h1>
							<h3 class="mb-4">
								{{ companyInfo.address }}
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
				:src="companyInfo.googleMapsEmbedLink"
				width="100%"
				height="100%"
				style="border: 0; min-height: 400px;"
				loading="lazy"
			></iframe>
		</BCol>			
	</BRow>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import companyInfo from '../../defaults/companyInfo'

	export default {
		components: {
			MapPinIcon,
		},

		data() {
			return {
				companyInfo,
			}
		},
	}
</script>