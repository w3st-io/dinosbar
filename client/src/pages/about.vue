<template>
	<BContainer class="my-5" data-aos="fade-up">
		<BCard bg-variant="light" class=" shadow">
			<BRow class="mb-3">
				<BCol cols="12">
					<h1 class="text-center font-weight-bold text-primary">
						{{ pageData.title }}
					</h1>
					<hr class="bg-secondary">
				</BCol>
			</BRow>

			<BRow>
				<!-- FIND US -->
				<BCol
					cols="12" lg="4" xl="3"
					order="2" order-lg="1"
					class="px-5"
					data-aos="fade"
				>
					<h1 class="mb-3 text-center font-weight-bold text-primary">
						Find Us
					</h1>

					<!-- Number -->
					<h3 class="text-secondary">Number</h3>
					<a
						:href="companyInfo.phoneNumberLink"
						class="text-decoration-none"
					>
						<p class="h5 mb-4 font-weight-bold text-dark">
							{{ companyInfo.phoneNumber }}
						</p>
					</a>
					<hr>

					<!-- [LEFT][IMAGE] -->
					<img
						:src="pageData.image"
						class="w-100 mb-4 rounded-lg shadow"
					>
				</BCol>

				<BCol
					cols="12" lg="8" xl="9"
					order="1" order-lg="2"
					class="px-sm-5"
					data-aos="fade"
				>
					<h3 class="text-secondary">
						{{ pageData.title }}
					</h3>
					<p class="h5 text-dark">
						<!-- [RIGHT] Img -->
						<img
							src="https://images2.imgbox.com/6f/f3/kiqIewcm_o.jpg" 
							class="d-none d-sm-block w-100 float-right mx-4 mb-3 rounded-lg shadow"
							style="max-width: 250px;"
							data-aos="fade-up"
						/>
						<span class="text-primary">{{ pageData.title1 }}</span>
						<br>
						<br>
						<span v-html="pageData.description"></span>
					</p>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import companyInfo from '@/defaults/companyInfo'
	import pageData from '@/defaults/pages/about'

	export default {
		components: {
			
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageData: pageData,
			}
		},
	}
</script>