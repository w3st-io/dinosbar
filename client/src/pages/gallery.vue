<template>
	<BContainer class="my-5">
			<!-- Page Title -->
			<h1 class="mb-3 text-center font-weight-bold text-primary">
				{{ pageData.title }}
			</h1>

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
					'https://images2.imgbox.com/22/63/MSDjcNtv_o.jpg',
					'https://images2.imgbox.com/69/35/A5MBYgnS_o.jpg',
					'https://images2.imgbox.com/14/f7/7MegnUg5_o.jpg',
					'https://images2.imgbox.com/3c/b2/30ZURsrn_o.jpg',
					'https://images2.imgbox.com/31/c8/6GD8j9X8_o.jpg',
					'https://images2.imgbox.com/80/4c/SQd9l4fz_o.jpg',
					'https://images2.imgbox.com/ae/e6/xlYuj6z7_o.jpg',
					'https://images2.imgbox.com/1d/94/rKEp0rbC_o.jpg',
					'https://images2.imgbox.com/c2/b0/xIVYeMhy_o.jpg',
					'https://images2.imgbox.com/33/7c/wDXQ3LO0_o.jpg',
					'https://images2.imgbox.com/b0/c1/grBrfER8_o.jpg',
					'https://images2.imgbox.com/be/b0/KifBVMg7_o.jpg',
					'https://images2.imgbox.com/7d/ae/171fnJAp_o.jpg',
					'https://images2.imgbox.com/a7/e3/AQQ4l2od_o.jpg',
					'https://images2.imgbox.com/e9/6c/UzREwvLs_o.jpeg',
				]"
			/>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import FoodImages from '../components/home/FoodImages.vue'
	import pageData from '@/defaults/pages/gallery'

	export default {
		data() {
			return {
				pageData: pageData,
			}
		},

		components: {
			FoodImages
		}
	}
</script>