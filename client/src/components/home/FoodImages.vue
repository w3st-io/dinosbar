<template>
	<viewer
		:options="{ title: false, transition: false, }"
		class="text-center"
	>
		<BRow class="m-0 p-0">
			<BCol
				v-for="(img, i) in images"
				:key="i"
				cols="6" sm="4" md="3"
				class="m-0 p-0"
			>
				<img :src="img" class="w-100" :class="{ 'd-none': i >= 4}">
			</BCol>
		</BRow>
	</viewer>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true,
		}
	},
}
</script>