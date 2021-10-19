<template>
	<BContainer v-if="services != []" class="my-5">
		<BCard bg-variant="light" class="shadow">
			<Product :product="services[0]" />
		</BCard>
	</BContainer>
</template>

<script>
	import Product from '@/components/Product'
	import pageData from '@/defaults/pages/services'
	import PageService from '@/services/PageService'

	export default {
		data() {
			return {
				reqData: {},
				pageData: pageData,
				services: [],
			}
		},

		components: {
			Product,
		},

		async created() {
			this.reqData = await PageService.s_services()
			console.log('sdf', this.reqData);

			if (this.reqData.status) { this.services = this.reqData.services }
			else { this.error = this.reqData.message }
		},
	}
</script>