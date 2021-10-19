// [IMPORT] //
import axios from 'axios'


export default {
	s_: async function () {
		try {
			const response = await axios.create().get('/pages/')
	
			return response.data
		}
		catch (err) { return err }
	},


	s_about: async function () {
		try {
			const response = await axios.create().get('/pages/about')
	
			return response.data
		}
		catch (err) { return err }
	},


	s_menu: async function () {
		try {
			const response = await axios.create().get(`/pages/menu`)
	
			return response.data
		}
		catch (err) { return err }
	},


	s_payments: async function (product_id) {
		try {
			const response = await axios.create().get(`/pages/payments/${product_id}`)
	
			return response.data
		}
		catch (err) { return err }
	},


	s_services: async function () {
		try {
			const response = await axios.create().get(`/pages/services`)
	
			return response.data
		}
		catch (err) { return err }
	},
}
