<template>
	<BContainer fluid class="m-0 p-0">
		<MapAndLocation />
	</BContainer>
</template>

<script>
	// [IMPORT] //

	// [IMPORT] Personal //
	import MapAndLocation from '../components/home/MapAndLocation'
	import DPage from '@/defaults/pages/directions'

	export default {
		components: {
			MapAndLocation,
		},

		data() {
			return {
				DPage: DPage,
			}
		},
	}
</script>