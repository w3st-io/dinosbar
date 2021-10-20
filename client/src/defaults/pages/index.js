const companyInfo = require('../companyInfo')


module.exports = {
	companyInfo: companyInfo,

	// [HERO] Caraousel Slider //
	caraousel: [
		{
			caption:'',
			text: 'DINO\'S BAR & GRILL',
			img: require('../../assets/images/pages/index/hero1.jpg'),
		},
		{
			caption:'',
			text: 'GREAT FOOD',
			img: require('../../assets/images/pages/index/hero2.jpg'),
		},
		{
			caption: '',
			text: 'SPORTS & MUSIC',
			img: require('../../assets/images/pages/index/hero3.jpg'),
		},
	],

	// Star Details //
	headerDetails: {
		caption1: companyInfo.companyCaption1,
		address: companyInfo.address,
		googleMapsLink: companyInfo.googleMapsLink,
		hoursOfOperation: companyInfo.hoursOfOperation,
		text: 'By Appointments',
	},

	bodyDetails: {
		row0: {
			image: require('../../assets/images/pages/index/dinos-front.png'),
			header: `About Dino's`,
			aboutCompanyHTML: companyInfo.aboutHTML
		},
	},
}