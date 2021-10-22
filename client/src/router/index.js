// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '@/pages'
import about from '@/pages/about'
import contact from '@/pages/contact'
import gallery from '@/pages/gallery'
import menu from '@/pages/menu'
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
			path: '/contact',
			name: 'contact',
			component: contact,
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
		},
		{
			path: '/menu',
			name: 'menu',
			component: menu,
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
