<template>
	<BContainer v-if="menuItems != []" class="my-5">
		<BCard bg-variant="light" class="mt-3 shadow">
			<BRow>
				<!-- Title -->
				<BCol cols="12">
					<h1 class="text-center font-weight-bold text-primary ">
						{{ DPage.title }}
					</h1>
				</BCol>

				<!-- Permanent Makeup -->
				<BCol cols="12" md="6" lg="4" data-aos="fade-up">
					<h2 class="text-center text-secondary font-weight-bold">Permanent Makeup</h2>

					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in menuItems.permanentMakeup"
							:key="index"
							variant="secondary"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ service.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ service.price }}
								</p>
							</BBadge>
						</BListGroupItem>
					</BListGroup>
				</BCol>

				<!-- Best Sellers -->
				<BCol cols="12" md="6" lg="4" data-aos="fade-up">
					<h2 class="text-center text-secondary font-weight-bold">Best Sellers</h2>

					<div v-for="(bs, index) in menuItems.bestSellers" :key="index">
						<h4 class="font-weight-bold text-secondary">{{ bs.title }}</h4>
						<BListGroup class="mb-3">
							<BListGroupItem
								v-for="(service, index) in bs.types"
								:key="index"
								variant="secondary"
								class="d-flex justify-content-between align-items-center"
							>
								<p class="m-0 h5">{{ service.name }}</p>
								<BBadge variant="primary" class="badge-pill">
									<p class="m-0 h5 font-weight-bold">
										${{ service.price }}
									</p>
								</BBadge>
							</BListGroupItem>
						</BListGroup>
					</div>
				</BCol>

				<!-- Spa -->
				<BCol cols="12" md="6" lg="4" data-aos="fade-up">
					<h2 class="text-center text-secondary font-weight-bold">Spa</h2>

					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in menuItems.spa"
							:key="index"
							variant="secondary"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ service.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ service.price }}
								</p>
							</BBadge>
						</BListGroupItem>
					</BListGroup>
				</BCol>

				{{ error }}
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import DPage from '@/defaults/pages/menu'
	import PageService from '@/services/PageService'

	export default {
		data() {
			return {
				DPage: DPage,
				reqData: {},
				menuItems: [],
				error: '',
			}
		},

		async created() {
			this.reqData = await PageService.s_menu()

			if (this.reqData.status) { this.menuItems = this.reqData.menuItems }
			else { this.error = this.reqData.message }
		},
	}
</script>