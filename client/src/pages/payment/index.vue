<template>
	<BContainer class="my-3">
		<BRow v-if="product">
			<!-- Your Order -->
			<BCol cols="12" md="5" class="mb-3">
				<BCard variant="white">
					<h2 class="text-center text-primary">Your Order</h2>
					<p class="h4">Type: {{ product.type }}</p>
					<p class="h4">Service: {{ product.name }}</p>
					<p class="h4">Price: ${{ product.price }}</p>
					<hr>

					<p class="h2 text-success">
						Down Payment: ${{ product.downPayment }}
					</p>
				</BCard>
			</BCol>

			<!-- Check Out -->
			<BCol cols="12" md="7" class="mb-3">
				<BCard variant="white">
					<h2 class="text-center text-primary">Check Out</h2>

					<!-- Email -->
					<label for="email">Your Email</label>
					<input
						v-model="email"
						name="email"
						type="email"
						placeholder="Your Email"
						class="form-control mb-3"
					>

					<!-- [CARD-INFO] Stripe -->
					<label for="card-info">Please Enter Card Info</label>
					<Card
						name="card-info"
						:stripe="STRIPE_PK"
						:class="{ complete }"
						class="mb-3 stripe-card form-control"
						@change="complete = $event.complete"
					/>

					<!-- [SUBMIT] -->
					<BButton
						:disabled="!complete"
						variant="primary"
						class="pay-with-stripe w-100 mb-3"
						@click="pay()"
					>Pay with credit card</BButton>

					<!-- Error -->
					<p class="h6 text-danger">{{ error }}</p>
				</BCard>
			</BCol>
		</BRow>

		<BRow v-else>
			<BCol cols="12">
				<BCard variant="white">
					<h1 class="text-center">Product Not Found</h1>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>
 
<script>
	// [IMPORT] //
	import { Card, createToken } from 'vue-stripe-elements-plus'

	// [IMPORT] Personal //
	import router from '@/router'
	import PageService from '@/services/PageService'
	import PaymentsService from '@/services/PaymentsService'
	
	export default {
		components: {
			Card,
		},
			
		data() {
			return {
				product_id: this.$route.params.product_id,
				STRIPE_PK: process.env.VUE_APP_STRIPE_PK,
				product: {},
				email: '',
				complete: false,
				token: {},
				reqData: {},
				error: '',
			}
		},

		async created() {
			this.reqData = await PageService.s_payments(this.product_id)

			this.product = this.reqData.product
		},
	
		methods: {
			async pay() {
				try {
					this.reqData = await createToken()

					this.reqData = await PaymentsService.s_charge(
						this.product_id,
						this.email,
						this.reqData.token
					)

					if (this.reqData.status) {
						router.push({ name: 'payment_success', })
					}
					else {
						this.error = this.reqData.message
					}
				}
				catch (err) { this.error = err }
			}
		}
	}
</script> 
 
<style>
	.stripe-card {
		width: 300px;
		border: 1px solid grey;
	}

	.stripe-card.complete {
		border-color: green;
	}
</style> 