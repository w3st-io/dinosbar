<template>
	<!-- MENU -->
	<BContainer fluid class="bg-white">
		<BContainer class="py-5">
			<Menu class="my-5" />
		</BContainer>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import Menu from '@/components/home/Menu'

	export default {
		components: {
			Menu,
		},
	}
</script>