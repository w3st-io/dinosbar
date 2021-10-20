<template>
	<div>
		<section id="menu">
            <div class="space-70"></div>
            <div class="container">
                <div class="text-center">
                    <h1 class="title-1">Our Menu</h1>
                    <h5 class="subtitle"></h5>
                    <div class="space-30"></div>
                </div>
                <ul class="menu-filter-list list-inline text-center">
                    <li class="is-checked" data-filter="*">All</li>
                    <li data-filter=".start">Appetizers</li>
                    <li data-filter=".lunch">Lunch</li>
                    <li data-filter=".dinner">Dinner</li>
                </ul>

                <div class="row menu-filter-items">
                    <div class="start col-md-4 margin-b-30 menu-item" :class="classs">
                        <div class="menu-box clearfix ">
                            <div class="thumb">
                                <img src="assets/images/wings.png" width="70" alt="">
                            </div>
                            <div class="menu-content">
                                <h4><a href="#">Buffalo Wings</a> <span>$10.00</span></h4>
                                <p>Mild, Medium, Hot, Atomic, Teriyaki, BBQ, Thai</p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class=" lunch dinner col-md-4 margin-b-30 menu-item">
                        <div class="menu-box clearfix ">
                            <div class="thumb">
                                <img src="assets/images/dinos-logo.png" width="70" alt="">
                            </div>
                            <div class="menu-content">
                                <h4><a href="#">House Salad</a> <span>$9</span></h4>
                                <p>Large salad, with fresh seasonal greens, veggies &amp; house dressing. w/chicken $4</p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->


                    <div class=" dinner col-md-4 margin-b-30 menu-item">
                        <div class="menu-box clearfix ">
                            <div class="thumb">
                                <img src="assets/images/dinos-logo.png" width="70" alt="">
                            </div>
                            <div class="menu-content">
                                <h4><a href="#">Special Coffee</a> <span>$7.79</span></h4>
                                <p>pellentesque enim. Aliquam tempor</p>
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                </div>
            </div>
            <div class="space-50"></div>
        </section>
        <!--end menu-->
	</div>
</template>

<script>
export default {
	data() {
		return {
			classs: ''
		}
	},
	created() {
		setTimeout(() => {
          this.classs = 'd-none'
        }, 3000)
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