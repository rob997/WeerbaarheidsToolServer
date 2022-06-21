const config = require("./config");
const request = require("request");

module.exports = {
  make_API_call: function (url) {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (err, res, body) => {
        if (err) reject(err);
        resolve(body);
      });
    });
  },
  make_API_call_key: function (url, email) {
    return new Promise((resolve, reject) => {
      request(
        url + email,
        {
          method: "GET",
          headers: {
            "User-Agent": "WeerbaarheidsTool",
            "hibp-api-key": config.APIkey,
          },
        },
        (err, res, body) => {
          if (err) reject(err);
          //console.log(err);
          resolve(body);
        }
      );
    });
  },
};
