<template>
	<BContainer fluid class="m-0 p-0">
		<ContactInfo />
		<MapAndLocation />
	</BContainer>
</template>

<script>
	// [IMPORT] //

	// [IMPORT] Personal //
	import ContactInfo from '@/components/ContactInfo'
	import MapAndLocation from '@/components/MapAndLocation'
	import DPage from '@/defaults/pages/directions'

	export default {
		components: {
			ContactInfo,
			MapAndLocation,
		},

		data() {
			return {
				DPage: DPage,
			}
		},
	}
</script>