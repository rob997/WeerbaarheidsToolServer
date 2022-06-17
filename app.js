const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/getAPIResponse', (req, res) => {
	api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.send(error)
	})
})

app.get('/getEmailBreaches', (req, res) => {
	api_helper.make_API_call_key('https://haveibeenpwned.com/api/v3/breachedaccount/','robperdok@hotmail.com', '18b7abde56c449f4aabbdfae21285417')
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.send(error)
	})
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app
