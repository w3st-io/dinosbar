<template>
	<BContainer id="menu" class="py-5">
		<div class="text-center">
			<h1 class="m-0 text-primary">Our Menu</h1>
			<hr class="mb-4 bg-light" style="max-width: 100px;">
		</div>

		<ul class="menu-filter-list list-inline text-center">
			<li
				@click="filterMenu('all')"
				:class="{ 'is-checked': currentTab == 'all' }"
			>All</li>
			<li
				@click="filterMenu('bar-snack')"
				:class="{ 'is-checked': currentTab == 'bar-snack' }"
			>Bar Snacks</li>
			<li
				@click="filterMenu('wings')"
				:class="{ 'is-checked': currentTab == 'wings' }"
			>Wings</li>
			<li
				@click="filterMenu('burger')"
				:class="{ 'is-checked': currentTab == 'burger' }"
			>Burgers</li>
			<li
				@click="filterMenu('sandwich')"
				:class="{ 'is-checked': currentTab == 'sandwich' }"
			>Sandwiches</li>
			<li
				@click="filterMenu('salad')"
				:class="{ 'is-checked': currentTab == 'salad' }"
			>Salads</li>
			<li
				@click="filterMenu('entree')"
				:class="{ 'is-checked': currentTab == 'entree' }"
			>Entrees</li>
		</ul>

		<BRow v-if="!loading" class="menu-filter-items">
			<BCol
				v-for="(item, i) in filteredMenu" :key="i"
				cols="12" sm="12" md="6" lg="6" xl="4"
				class="border border-light py-4 start menu-item"
				style="border-style: dotted !important;"
			>
				<div class="menu-box clearfix">
					<div class="thumb">
						<img
							:src="item.img || placeholderImg"
							width="70"
							class="d-none d-sm-block"
						>
					</div>

					<div class="menu-content">
						<h4 class="mb-3 text-primary">
							<a @click="viewProduct(i)" class="text-primary">
								{{ item.name }}
							</a>
							<span>{{ item.costString }}</span>
						</h4>
						<p class="m-0 p-0 text-info">
							{{
								item.description.length > 100 ?
									item.description.substring(0, 100 - 3) + '...' :
									item.description
							}}
						</p>
					</div>
				</div>
			</BCol>
		</BRow>

		<!-- Product Viewer -->
		<div
			class="overlay w-100 h-100 position-fixed"
			:class="{
				'd-none': !viewingProduct,
				'd-block': viewingProduct,
			}"
		>
			<div class="overlay-content w-100 px-2 position-relative text-center">
				<BCard
					no-body
					bg-variant="light"
					text-variant="dark"
					border-variant="secondary"
					class="m-auto h-100 text-center shadow"
					style="max-width: 800px;"
				>
					<BCardHeader class="bg-dark">
						<BButton
							variant="danger"
							class="my-2 p-1 px-4 float-right"
							pill
							@click="viewingProduct = false"
							style="border-radius: 20px !important;"
						>✖</BButton>
					</BCardHeader>

					<BCardBody class="overlay-content-body" style="overflow-y: auto;">
						<BRow>
							<BCol cols="12" class="text-center">
								<img
									:src="filteredMenu[viewingProductNumber].img || placeholderImg"
									class="w-100 mx-auto mt-3 mb-5 rounded"
									style="max-width: 400px;"
								>
							</BCol>
							<BCol cols="12" class="my-3">
								<h4 class="font-weight-bold text-primary">
									{{ filteredMenu[viewingProductNumber].name }}
								</h4>
								<h5>{{ filteredMenu[viewingProductNumber].description }}</h5>
							</BCol>
						</BRow>
					</BCardBody>

					<BCardFooter class="bg-dark">
						<h5 class="m-0 font-weight-bold text-primary">
							{{ filteredMenu[viewingProductNumber].costString }}
						</h5>
					</BCardFooter>
				</BCard>
			</div>
		</div>
	</BContainer>
</template>

<script>
	import menu from '@/defaults/menu'

	export default {
		data() {
			return {
				loading: true,

				currentTab: 'all',
				
				menu: menu,
				filteredMenu: menu,
				placeholderImg: require('../assets/images/logo.jpg'),

				viewingProduct: false,
				viewingProductNumber: 0,
			}
		},

		methods: {
			filterMenu(filter) {
				this.loading = true
				this.currentTab = filter
				this.filteredMenu = []

				if (filter == 'all') { this.filteredMenu = this.menu }
				else {
					for (let i = 0; i < this.menu.length; i++) {
						const mi = this.menu[i]
					
						if (mi.category == filter) {
							this.filteredMenu.push(mi)
						}
					}
				}

				this.loading = false
			},

			viewProduct(i) {
				this.viewingProduct = true
				this.viewingProductNumber = i
			},
		},

		created() {
			this.loading = false

			window.addEventListener('keyup', (event) => {
				if (event.key == 'Escape') {
					this.viewingProduct = false
				}
			})
		},
	}
</script>

<style lang="scss" scoped>
	/* Menu Style */
	.menu-box .thumb {
		float: left;
		margin-right: 20px;
	}
	.menu-box .menu-content {
		overflow: hidden;
	}
	.menu-box .menu-content h4 {
		margin-bottom: 5px;
		font-family: "Poppins", sans-serif;
		border-bottom: 1px dashed rgb(196, 131, 131);
		padding-bottom: 5px;
		font-weight: 500;
		text-transform: uppercase;
		font-size: 15px;
		letter-spacing: 1px;
	}
	.menu-box .menu-content h4 a {
		color: #444;
	}
	.menu-box .menu-content h4 a:hover {
		color: #c0996b;
	}
	.menu-box .menu-content h4 span {
		float: right;
		display: block;
		font-family: "Lato", sans-serif;
	}
	/**isoptope**/
	.menu-filter-list {
		padding-bottom: 30px;
	}
	.menu-filter-list li {
		display: inline-block;
		cursor: pointer;
		padding: 10px 20px 6px;
		text-transform: uppercase;
		background: #f5f5f5;
		-moz-transition: all 0.3s;
		-o-transition: all 0.3s;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
		font-family: "Poppins", sans-serif;
	}
	.menu-filter-list li.is-checked,
	.menu-filter-list li:hover {
		background: #ee3541;
		color: #fff;
	}
	.menu-grid {
		display: block;
		position: relative;
		overflow: hidden;
	}
	.menu-grid img {
		-moz-transition: all 0.3s;
		-o-transition: all 0.3s;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
	}
	.menu-grid-desc {
		padding: 13px 15px;
		background: #fff;
		color: #888;
	}
	.menu-grid-desc .price {
		color: #c0996b;
		font-weight: 700;
		font-size: 20px;
		line-height: 29px;
	}
	.menu-grid-desc h4 {
		padding: 5px 0;
		font-weight: 400;
		text-transform: capitalize;
	}
	.menu-grid-desc p {
		margin-bottom: 0px;
	}


	/***** OVERLAY *****/
	.overlay {
		z-index: 2000;
		top: 0;
		left: 0;

		background: rgba(255, 255, 255, 0.1);

		backdrop-filter: blur(6px);
	}

	.overlay-content {
		top: 2vh;
		max-height: 96vh;

		@media (min-width: 768px) {
			top: 20vh;
			max-height: 60vh;
		}
	}

	.overlay-content-body {
		background-color: rgb(41, 41, 41);
		color: white;
	}
</style>