<template>
	<div class="mt-5 w-100 text-secondary">
		<BContainer>
			<BRow class="pb-5">
				<BCol cols="12" class="text-center" data-aos="fade-up">
					<h1 class="mb-5 text-primary">Follow Us</h1>
					<SocialMediaPlug variant="primary" size="3x" />
				</BCol>

				<BCol cols="12">
					<FoodImages
						:images="[
							'https://images2.imgbox.com/c4/10/iDBl4xhG_o.jpg',
							'https://images2.imgbox.com/41/e3/CeI2oMmZ_o.jpg',
							'https://images2.imgbox.com/3c/54/nB7dUa9T_o.jpg',
							'https://images2.imgbox.com/bd/92/6rUWWZ64_o.jpg',
							'https://images2.imgbox.com/64/4a/kv6E0DkI_o.jpg',
							'https://images2.imgbox.com/9e/75/FVNJaOwT_o.jpg',
							'https://images2.imgbox.com/ed/7a/Em86ViCk_o.jpg',
							'https://images2.imgbox.com/e7/0b/e0wkwu8J_o.jpg',
						]"
					/>

					<div class="text-center">
						<RouterLink to="/gallery">
							<BButton
								class="my-5"
								size="lg"
							>View More Images</BButton>
						</RouterLink>
					</div>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import FoodImages from '../components/home/FoodImages.vue'
	import SocialMediaPlug from '../components/SocialMediaPlug'
	import companyInfo from '../defaults/companyInfo'
	import pageLinks from '../defaults/pageLinks'

	export default {
		components: {
			SocialMediaPlug,
			FoodImages
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageLinks: pageLinks,
			}
		},
	}
</script>