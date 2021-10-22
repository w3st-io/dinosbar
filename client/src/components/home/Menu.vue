<template>
	<section id="menu">
		<div class="text-center">
			<h1 class="title-1">Our Menu</h1>
			<h5 class="subtitle"></h5>
			<div class="space-30"></div>
		</div>
		<ul class="menu-filter-list list-inline text-center">
			<li @click="filterMenu('all')" :class="{ 'is-checked': currentTab == 'all' }">All</li>
			<li @click="filterMenu('appetizer')" :class="{ 'is-checked': currentTab == 'appetizer' }">Appetizers</li>
			<li @click="filterMenu('salad')" :class="{ 'is-checked': currentTab == 'salad' }">Salads</li>
			<li @click="filterMenu('entree')" :class="{ 'is-checked': currentTab == 'entree' }">Entrees</li>
		</ul>

		<BRow v-if="!loading" class="menu-filter-items">
			<BCol
				v-for="(item, i) in filteredMenu" :key="i"
				cols="12" sm="12" md="4"
				class="start menu-item"
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
						<h4 class="text-primary">
							<a href="#" class="text-primary">
								{{ item.name }}
							</a>
							<span>{{ item.costString }}</span>
						</h4>
						<p class="text-info">{{ item.description }}</p>
					</div>
				</div>
			</BCol>
		</BRow>
	</section>
</template>

<script>
	import menu from '../../defaults/menu'

	export default {
		data() {
			return {
				loading: true,
				currentTab: 'all',
				menu: menu,
				filteredMenu: menu,
				placeholderImg: require('../../assets/images/company/logo.png')
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
			}
		},

		created() {
			this.loading = false
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
		border-bottom: 1px dashed #eee;
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
</style>