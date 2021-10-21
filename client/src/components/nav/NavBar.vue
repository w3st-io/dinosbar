<template>
	<div class="w-100 fixed-top">
		<div
			class="d-none d-lg-flex w-100 transition"
			:class="[navClass, { 'bg-secondary': !$store.state.isHomePage }]"
		>
			<div class="ml-auto">
				<RouterLink to="/" class="">
					<BButton
						variant="none"
						class="mx-3 py-3 text-light menu-link"
						:class="titleClass"
						style="width: 100px;"
					>HOME</BButton>
				</RouterLink>

				<RouterLink to="/menu" class="text-light">
					<BButton
						variant="none"
						class="mx-3 py-3 text-light menu-link"
						:class="titleClass"
						style="width: 100px;"
					>MENU</BButton>
				</RouterLink>
			</div>

			<div class="text-center" style="width: 350px;">
				<img :src="require('../../assets/images/dinos-dark.png')" alt="" class="w-100">
			</div>

			<div class="mr-auto">
				<RouterLink to="/contact" class="">
					<BButton
						variant="none"
						class="mx-3 py-3 text-light menu-link"
						:class="titleClass"
						style="width: 100px;"
					>CONTACT</BButton>
				</RouterLink>

				<RouterLink to="/about" class="">
					<BButton
						variant="none"
						class="mx-3 py-3 text-light menu-link"
						:class="titleClass"
						style="width: 100px;"
					>ABOUT</BButton>
				</RouterLink>
			</div>
		</div>

		<div
			class="d-flex d-lg-none m-0 p-0 text-right"
			:class="[navClass, { 'bg-secondary': !$store.state.isHomePage }]"
		>
			<div class="text-center w-100 py-3" style="max-width: 150px;">
				<img :src="require('../../assets/images/dinos-dark.png')" alt="" class="w-100">
			</div>

			<!-- [HIDDEN] Menu Button -->
			<BButton
				variant="none"
				class="ml-auto px-5 text-light"
				@click="toggle()"
			><MenuIcon size="3x" /></BButton>
		</div>

		<!-- Hidden Side Menu -->
		<SideMenu />
	</div>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '@/router'

	export default {
		components: {
			MenuIcon,
			SideMenu,
		},

		data() {
			return {
				titleClass: '',
				navClass: '',
				companyInfo: companyInfo,
				buttons: buttons,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,router:router
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },

			handleScroll() {
				if (window.scrollY > 0) {
					this.navClass = 'bg-shade'
					this.titleClass = 'text-white'
				}
				else {
					this.navClass = ''
					this.titleClass = ''
				}
			},
		},

		created() {
			window.addEventListener('scroll', this.handleScroll)
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/bootstrap-override.scss';

	.transition {
		transition: .5s;
	}

	.nav {
		z-index: 100;
	}

	.menu-link {
		:hover {
			@extend .text-primary;
		}
	}

	.router-link-exact-active {
		.menu-link {
			@extend .text-primary;

			box-shadow: 0 !important;
		}
	}
</style>