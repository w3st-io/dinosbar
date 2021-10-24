<template>
	<div class="text-light bg-primary">
		<BContainer class="py-4">
			<BRow class="m-0 p-0 bg-primary contact-info">
				<!-- EMAIL -->
				<BCol cols="12" lg="6" xl="4" class="py-3">
					<i class="ion-email">
						<MailIcon size="1.1x" />
					</i>
					<h5 class="font-weight-bold">
						Email
					</h5>
					<h6 class="font-weight-bold">
						<a :href="companyInfo.emailLink" class="text-light">
							{{ companyInfo.email }}
						</a>
					</h6>
				</BCol>

				<!-- RESERVATION -->
				<BCol cols="12" lg="6" xl="4" class="py-3">
					<i class="ion-email">
						<ClockIcon size="1.1x" />
					</i>
					<h5 class="font-weight-bold">
						Group Reservations
					</h5>
					<h6 class="font-weight-bold">
						<a :href="companyInfo.phoneNumberLink" class="text-light">
							{{ companyInfo.phoneNumber }}
						</a>
					</h6>
				</BCol>

				<!-- LOCATION -->
				<BCol cols="12" lg="6" xl="4" class="py-3">
					<i class="ion-email">
						<MapIcon size="1.1x" />
					</i>
					<h5 class="font-weight-bold">
						Location
					</h5>
					<h6 class="font-weight-bold">
						<a :href="companyInfo.googleMapsLink" target="_blank" class="text-light">
							{{ companyInfo.address }}
						</a>
					</h6>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
import { ClockIcon, MailIcon, MapIcon } from 'vue-feather-icons'

import companyInfo from '../defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo
		}
	},

	components: {
		ClockIcon,
		MailIcon,
		MapIcon,
	},
}
</script>

<style lang="scss" scoped>
	.contact-info i {
		display: block;
		float: left;
		width: 60px;
		height: 60px;
		line-height: 52px;
		text-align: center;
		background: #fff;
		color: #c0996b;
		font-size: 30px;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		border-radius: 50%;
		margin-right: 20px;
	}
</style>