const companyInfo = require('../companyInfo')


module.exports = {
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
			image: companyInfo.companyLogo,
			header: `About ${companyInfo.companyName}`,
			aboutCompanyHTML: companyInfo.aboutHTML
		},

		row1: {
			header: 'Pamela, CEO/Founder of Balance Within',
			
			header2: 'Intuitive Empath, Light-worker and Energy Facilitator, Reiki Practitioner and Wellness Coach',

			messageHTML: companyInfo.messageHTML,

			caraousel: [
				{
					caption: '',
					text: '',
					img: require('../../assets/images/pages/index/owner.jpg'),
				},
				{
					caption: '',
					text: '',
					img: require('../../assets/images/pages/index/profile.jpg'),
				},
			],
		},
	},
}