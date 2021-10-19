// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '@/pages'
import about from '@/pages/about'
import blog from '@/pages/blog'
import book from '@/pages/book'
import contact from "@/pages/contact"
import directions from '@/pages/directions'
import faq from '@/pages/faq'
import gallery from '@/pages/gallery'
import ourTeam from '@/pages/our-team'
import payment from '@/pages/payment'
import payment_success from '@/pages/payment/success'
import menu from '@/pages/menu'
import services from '@/pages/services'
import services_chakraClearingWithCrystals from '@/pages/services/chakra-clearing-with-crystals'
import services_footDetoxAndSpa from '@/pages/services/foot-detox-and-spa'
import services_oracleCardReadings from '@/pages/services/oracle-card-readings'
import services_wellnessProductsByPamela from '@/pages/services/wellness-products-by-pamela'
import services_reiki from '@/pages/services/reiki'
import notFound from '@/pages/404'


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: '/',
			component: index,
		},
		{
			path: '/about',
			name: 'about',
			component: about,
		},
		{
			path: '/blog',
			name: 'blog',
			component: blog,
		},
		{
			path: '/book',
			name: 'book',
			component: book,
		},
		{
			path: '/contact',
			name: 'contact',
			component: contact,
		},
		{
			path: '/directions',
			name: 'directions',
			component: directions,
		},
		{
			path: '/faq',
			name: 'faq',
			component: faq,
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
		},
		{
			path: '/our-team',
			name: 'our-team',
			component: ourTeam,
		},
		{
			path: '/payment/:product_id',
			name: 'payment',
			component: payment,
		},
		{
			path: '/payment/success',
			name: 'payment_success',
			component: payment_success,
		},
		{
			path: '/menu',
			name: 'menu',
			component: menu,
		},
		// Services //
		{
			path: '/services',
			name: 'services',
			component: services,
		},
		{
			path: '/services/chakra-clearing-with-crystals',
			name: 'services_chakraClearingWithCrystals',
			component: services_chakraClearingWithCrystals,
		},
		{
			path: '/services/foot-detox-and-spa',
			name: 'services_footDetoxAndSpa',
			component: services_footDetoxAndSpa,
		},
		{
			path: '/services/oracle-card-readings',
			name: 'services_oracleCardReadings',
			component: services_oracleCardReadings,
		},
		{
			path: '/services/reiki',
			name: 'services_reiki',
			component: services_reiki,
		},
		{
			path: '/services/wellness-products-by-pamela',
			name: 'services_wellnessProductsByPamela',
			component: services_wellnessProductsByPamela,
		},
		// Not-Found //
		{
			path: '/**',
			name: 'not_found',
			component: notFound,
		},
	],

	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior () { return { x: 0, y: 0 } }
})

export default router
