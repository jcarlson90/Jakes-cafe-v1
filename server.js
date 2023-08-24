require('dotenv').config();
require('./config/database')
const app = require('./app-server');
const PORT = process.env.PORT || 8004;


app.listen(PORT, () => {
	console.log('we in the buildin on ' + PORT)
})

