// [REQUIRE] //
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')


// [REQUIRE] Personal // Other // API // Pages //
const config = require('./s-config')
const Functionality = require('./s-middleware/Functionality')

const a_payments = require('./s-routes/api/payments')

const p_ = require('./s-routes/pages')
const p_about = require('./s-routes/pages/about')
const p_menu = require('./s-routes/pages/menu')
const p_payments = require('./s-routes/pages/payment')
const p_services = require('./s-routes/pages/services')


// [EXPRESS] //
const app = express()
const server = http.createServer(app)


// [MONGOOSE-CONNECTION] //
mongoose.connect(
	config.MONG_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	(err, connected) => {
		if (connected) { console.log('Mongoose Connected to DB') }
		else { console.log(`Mongoose Connection Error --> ${err}`) }
	}
)


// [USE] // Default Stuff // Set static Folder // Rate-Limiter //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


// [USE] Personal // API // Pages //
app.use('/api/payments', Functionality.paymentsSystem(), a_payments)

app.use('/pages', p_)
app.use('/pages/about', p_about)
app.use('/pages/menu', p_menu)
app.use('/pages/payments', p_payments)
app.use('/pages/services', p_services)


// [HEROKU] Set Static Folder for Heroku //
if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/dist'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}


// [PORT + LISTEN] //
const port = config.PORT
server.listen(port, () => { console.log(`Server Running on Port: ${port}`) })