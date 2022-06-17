const request = require('request')

const APIkey = '18b7abde56c449f4aabbdfae21285417'


module.exports = {
	make_API_call : function(url){
		return new Promise((resolve, reject) => {
			request(url, { json: true }, (err, res, body) => {
			  if (err) reject(err)
			  resolve(body)
			});
		})
	},
	make_API_call_key : function(url, email, key){
		return new Promise((resolve, reject) => {
			request(url + email, 
				{
				method: "GET",
				headers: {
					"User-Agent" : "WeerbaarheidsTool",
					"hibp-api-key" : APIkey },
				}, (err, res, body) => {
				if (err) reject(err)
					console.log(err)
					resolve(body)
				});
		})
	}
}
