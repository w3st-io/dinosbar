<template>
	<BRow class="py-5">
		<BCol cols="12" md="6">
			<div>
				<h1 class="text-center font-weight-bold">
					About {{ companyInfo.companyShortName }}
				</h1>
				<h6 class="text-center text-muted">
					{{ companyInfo.companyCaption1 }}
				</h6>
				<br>
				<p
					v-html="companyInfo.aboutHTML"
					class="mb-4 h5 text-dark"
					data-aos="fade-up"
				></p>
				<div class="text-center">
					<img
					:src="companyInfo.signImage"
					class="w-100"
					style="max-width: 200px;"
				>
				</div>
			</div>
		</BCol>

		<BCol cols="12" md="6" class="d-none d-md-block">
			<div class="text-center">
				<img
					:src="companyInfo.locationImage"
					class="w-100"
					style="max-width: 600px;"
				>
			</div>
		</BCol>
	</BRow>
</template>

<script>
import companyInfo from '@/defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo
		}
	},
}
</script>