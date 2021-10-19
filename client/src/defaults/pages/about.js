const companyInfo = require('../companyInfo') 

// [EXPORT] //
module.exports = {
	title: 'About',

	title1: 'Pamela, CEO/Founder of Balance Within',
	
	description: companyInfo.messageHTML,
	
	image: 'https://images2.imgbox.com/93/bc/J3fmtNPv_o.png',
	
	address: companyInfo.address,
	googleMapsLink: companyInfo.googleMapsLink,
	gMapsPlaceholder: companyInfo.googleMapsImage,
}