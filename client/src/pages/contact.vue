<template>
	<BContainer class="my-5">
		<BRow>
			<BCol cols="12">
				<BCard bg-variant="light" class="text-center shadow">
					<BRow>
						<BCol cols="12">
							<h1 class="mb-3 text-center font-weight-bold text-primary">
								Find Us
							</h1>
							<hr class="bg-secondary">
						</BCol>

						<BCol cols="12" md="7" class="m-auto">
							<br>
							<!-- Number -->
							<h2 class="font-weight-bold text-primary">Number</h2>
							<a
								:href="companyInfo.phoneNumberLink"
								class="text-decoration-none"
							>
								<BButton variant="secondary" size="lg" class="m-3">
									<h2 class="m-0">
										<PhoneIcon size="1x" />
										{{ companyInfo.phoneNumber }}
									</h2>
								</BButton>
							</a>

							<!-- Location -->
							<h2 v-if="companyInfo.googleMapsLink" class="text-secondary">
								Location
							</h2>
							<a
								v-if="companyInfo.googleMapsLink"
								:href="companyInfo.googleMapsLink"
								class="text-decoration-none"
							>
								<BButton variant="primary" size="lg" class="m-3">
									<MapPinIcon size="1x" />
									{{ companyInfo.address }}
								</BButton>
							</a>

							<!-- Hours -->
							<h3
								v-if="companyInfo.hoursOfOperation > 0"
								class="text-secondary"
							>Hours</h3>
							<ul
								v-if="companyInfo.hoursOfOperation > 0"
								class="list-unstyled text-small text-light"
							>
								<li
									v-for="(hoo, i) in companyInfo.hoursOfOperation"
									:key="i"
									class="text-primary h5"
								>{{ hoo.days }}: {{ hoo.hours }}</li>
							</ul>
							<br>
							<br>

							<!-- Social Media -->
							<h3 class="mb-3 text-center font-weight-bold text-primary">Follow Us!</h3>
							<SocialMediaPlug strokeWidth="1" size="4x" variant="secondary" class="mb-5" />
						</BCol>

						<BCol cols="12" md="5">
							<BCarousel
								:slideObjs="[
									{
										caption: '',
										text: '',
										img: 'https://images2.imgbox.com/9e/f5/8rTtdi1C_o.png',
									},
								]"
								class="mb-3 shadow"
								maxHeight="1000"
							/>
						</BCol>
					</BRow>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon, PhoneIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import BCarousel from '@/components/display/BCarousel'
	import SocialMediaPlug from '@/components/SocialMediaPlug.vue'
	import companyInfo from '@/defaults/companyInfo'

	export default {
		components: {
			BCarousel,
			MapPinIcon,
			PhoneIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo,
			}
		},
	}
</script>