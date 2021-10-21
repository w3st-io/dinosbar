<template>
	<div class="text-light bg-primary">
		<BContainer class="py-4">
			<BRow class="m-0 p-0 bg-primary contact-info">
				<!-- EMAIL -->
				<BCol cols="12" md="4">
					<i class="ion-email">
						<MailIcon size="1.1x" />
					</i>
					<h3 class="font-weight-bold">
						Email
					</h3>
					<h6 class="font-weight-bold">
						<a :href="companyInfo.emailLink" class="text-light">
							{{ companyInfo.email }}
						</a>
					</h6>
					<br>
				</BCol>

				<!-- RESERVATION -->
				<BCol cols="12" md="4">
					<i class="ion-email">
						<ClockIcon size="1.1x" />
					</i>
					<h3 class="font-weight-bold">
						Group Reservations
					</h3>
					<h6 class="font-weight-bold">
						<a :href="companyInfo.phoneNumberLink" class="text-light">
							{{ companyInfo.phoneNumber }}
						</a>
					</h6>
					<br>
				</BCol>

				<!-- LOCATION -->
				<BCol cols="12" md="4">
					<i class="ion-email">
						<MapIcon size="1.1x" />
					</i>
					<h3 class="font-weight-bold">
						Location
					</h3>
					<h6 class="font-weight-bold">
						<a :href="companyInfo.googleMapsLink" class="text-light">
							{{ companyInfo.address }}
						</a>
					</h6>
					<br>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
import { ClockIcon, MailIcon, MapIcon } from 'vue-feather-icons'

import companyInfo from '../../defaults/companyInfo'

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