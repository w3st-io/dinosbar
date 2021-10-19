<template>
	<BRow>
		<BCol cols="12">
			<h1 class="mb-3 text-center font-weight-bold  text-primary">
				{{ product.title }}
			</h1>
			<h6 class="mb-3 text-center font-weight-bold text-secondary">
				{{ product.heading1 }}
			</h6>
		</BCol>

		<BCol cols="12" md="3" class="d-none d-md-block">
			<img :src="product.image" class="w-100 mb-3 rounded">

			<h6 class="m-0 text-center text-primary fancy-text">Gift Cards Are Available</h6>
			<p class="text-center fancy-text">
				Healing is the gift that keeps on giving!
			</p>
		</BCol>

		<BCol cols="12" md="9">
			<p class="h5 p-2" data-aos="fade">
				{{ product.description }}
			</p>

			<p class="small p-2 fancy-text" data-aos="fade">
				{{ product.disclaimer }}
			</p>

			<!-- [CONTENT] -->
			<div v-for="(c, i) in product.content" :key="i">
				<!-- [LIST] -->
				<div v-if="c.type == 'list'" class="mb-3">
					<BListGroup>
						<BListGroupItem class="border-0">
							<h3 class="text-center m-0 font-weight-bold text-primary fancy-text">
								{{ c.title }}
							</h3>
						</BListGroupItem>
						<BListGroupItem
							v-for="(item, ii) in c.items"
							:key="ii"
							class="m-0 py-1 border-0"
						>
							<h5 class="m-0">{{ item }}</h5>
						</BListGroupItem>
					</BListGroup>
					<br>
				</div>

				<!-- [CHECK-LIST] -->
				<div v-if="c.type == 'check-list'" class="mb-3">
					<BListGroup class="border-0 transparent">
						<BListGroupItem class="px-0 border-0 transparent">
							<h3 class="text-center m-0 font-weight-bold text-primary fancy-text">
								{{ c.title }}
							</h3>
						</BListGroupItem>
						<BListGroupItem
							v-for="(item, ii) in c.items"
							:key="ii"
							class="m-0 py-1 border-0 transparent"
						>
							<h5 class="m-0">
								<spna class="text-secondary">✓</spna>
								{{ item }}
							</h5>
						</BListGroupItem>
					</BListGroup>
					<br>
				</div>

				<!-- [PARAGRAPH] -->
				<div v-if="c.type == 'paragraph'" class="mb-3">
					<h5 class="text-primary">{{ c.title }}</h5>
					<p>{{ c.content }}</p>
					<hr>
				</div>
			</div>

			<!-- [PRICING] -->
			<div v-if="product.pricing.length > 0" class="">
				<BListGroup class="mx-auto border" style="max-width: 400px;">
					<BListGroupItem
						variant="primary"
						class="
							text-center
							border-light
							border-bottom
							border-top-0
							border-left-0
							border-right-0
						"
					>
						<h5 class="m-0 text-primary font-weight-bold">Pricing</h5>
					</BListGroupItem>
		
					<BListGroupItem
						v-for="(p, i) in product.pricing"
						:key="i"
						variant="primary"
						class="py-2 border-0"
					>
						<BRow>
							<BCol cols="12" md="9">
								<h6 class="m-0 text-dark">
									{{ p.title }}
								</h6>
							</BCol>
							<BCol cols="12" md="3">
								<h6 class="m-0 text-dark">
									{{ p.costString }}
								</h6>
							</BCol>
						</BRow>
					</BListGroupItem>
				</BListGroup>
			</div>
		</BCol>

		<BCol cols="12">
			<RouterLink to="/contact">
				<BButton variant="primary" size="lg" class="w-100 mt-3">
					Book Now
				</BButton>
			</RouterLink>
		</BCol>
	</BRow>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		}
	},
}
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
	
	.transparent {
		background-color: transparent !important;
	}

	.fancy-text {
		font-family: 'Caveat', cursive !important;
	}
</style>