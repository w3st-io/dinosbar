<template>
	<BContainer v-if="services != []" class="my-5">
		<BCard bg-variant="light" class="shadow">
			<BRow>
				<BCol cols="12">
					<h1 class="mb-4 text-center text-primary">{{ pData.title }}</h1>
					<hr class="mb-5 bg-secondary">
				</BCol>

				<!-- Service Cards -->
				<BCol
					v-for="(s, i) in services" :key="i"
					cols="12" md="6" lg="4"
					class="d-flex align-items-stretch"
				>
					<BCard
						bg-variant="light"
						no-body
						class="w-100 mb-4 border shadow"
						:style="`
							background-image: url(${s.image});
							background-position: center;'
							border-color: grey !important;
						`"
					>
						<BCardHeader class="text-center bg-shade text-primary border-0">
							<h3 class="m-0 font-weight-bold">{{ s.title }}</h3>
						</BCardHeader>

						<BCardBody class="bg-shade show">
							<h5 class="text-justify mb-2 font-weight-bold text-dark">
							{{
								s.description.length > 100 ?
									s.description.substring(0, 100 - 3) + '...' :
									s.description
							}}
							</h5>
						</BCardBody>

						<BCardFooter class="border-0 bg-shade">
							<RouterLink
								:to="`/services/${s.id}`"
								class="text-decoration-none"
							>
								<BButton
									size="lg"
									class="w-100"
								>Click to Learn More</BButton>
							</RouterLink>
						</BCardFooter>
					</BCard>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import pData from '@/defaults/pages/services'
	import PageService from '@/services/PageService'

	export default {
		data() {
			return {
				loading: true,
				reqData: {},
				pData: pData,
				services: [],
			}
		},

		async created() {
			this.reqData = await PageService.s_services()

			if (this.reqData.status) { this.services = this.reqData.services }
			else { this.error = this.reqData.message }

			this.loading = false
		},
	}
</script>

<style lang="scss" scoped>
	.bg-shade {
		background-color: rgba(255, 255, 255, 0.75) !important;
	}
</style>