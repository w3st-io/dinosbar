// [REQUIRE] //
//const feather = require('feather-icons')


// [EXPORT] //
module.exports = [
	/*
	{
		path: '/',
		text: 'Home',
		navIcon: feather.icons.home.toSvg({
			'stroke-width': 2.4,
			width: 16,
			height: 16,
			'class': ''
		}),
		slideMenuIcon: feather.icons.home.toSvg({
			'stroke-width': 2.4,
			width: 34,
			height: 34,
			'class': 'my-2'
		}),
		children: [],
	},
	*/
	{
		path: '/services',
		text: 'Services',
		children: [
			{
				path: '/services/reiki',
				text: 'Services',
			},
		],
	},
	/*
	{
		path: '/menu',
		text: 'Menu',
		children: [],
	},
	*/
	{
		path: '/about',
		text: 'About',
		children: [],
	},
	/*
	{
		path: '/directions',
		text: 'Directions',
		children: [],
	},
	*/
	{
		path: '/contact',
		text: 'Contact',
		children: [],
	},
	{
		path: '/gallery',
		text: 'Gallery',
		children: [],

	},
	{
		path: '/faq',
		text: 'FAQ',
		children: [],
	},
	{
		path: '/blog',
		text: 'Blog',
		children: [],
	},
]