<template>
	<div class="w-100 fixed-top">
		<div class="logo-holder-holder">
			<div
				class="text-center logo-holder transition"
				:class="[navClass, { 'bg-secondary': !$store.state.isHomePage }]"
				style="z-index: 99;"
			>
				<img :src="require('../../assets/images/dinos-dark.png')" alt="" class="w-100">
			</div>
		</div>

		<div class="d-none d-lg-flex w-100">
			<div
				class="ml-auto text-right menu-section transition"
				:class="[navClass, { 'bg-secondary': !$store.state.isHomePage }]"
			>
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
				
			</div>

			<div
				class="mr-auto text-left menu-section transition"
				:class="[navClass, { 'bg-secondary': !$store.state.isHomePage }]"
			>
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

		<BContainer fluid class="d-block d-lg-none m-0 p-0 bg-black text-right">
			<!-- [HIDDEN] Menu Button -->
			<BButton
				variant="secondary"
				class="px-5"
				@click="toggle()"
			><MenuIcon size="3x" /></BButton>
		</BContainer>

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

	.logo-holder-holder {
		position: absolute;
		left: calc(50% - 175px);

		@media (max-width: 768px) {
			left: 0;
		}
	}

	.logo-holder {
		position: relative;
		width: 350px;

		.title { font-size: 4em; }
		.caption { font-size: 2em; }

		@media (max-width: 768px) {
			width: 200px;

			.title { font-size: 3em; }
			.caption { font-size: 1em; }
		}
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