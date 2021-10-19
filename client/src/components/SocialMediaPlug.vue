<template>
	<div class="text-center">
		<a :href="defaultData.facebookLink" :class="`text-${variant}`">
			<FacebookIcon :stroke-width="strokeWidth" :size="size" class="mr-3" />
		</a>

		<a :href="defaultData.instagramLink" :class="`text-${variant}`">
			<InstagramIcon :stroke-width="strokeWidth" :size="size" class="mr-3" />
		</a>

		<a :href="defaultData.youtubeLink" :class="`text-${variant}`">
			<YoutubeIcon :stroke-width="strokeWidth" :size="size" class="" />
		</a>
	</div>
</template>

<script>
	// [IMPORT] //
	import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import defaultData from '@/defaults/companyInfo'

	export default {
		props: {
			size: {
				type: String,
				default: "24",
			},

			variant: {
				type: String,
				default: 'light'
			},

			strokeWidth: {
				type: String,
				default: '1.5'
			},
		},

		components: {
			FacebookIcon,
			InstagramIcon,
			YoutubeIcon
		},
		
		data() {
			return {
				defaultData: defaultData,
			}
		},
	}
</script>