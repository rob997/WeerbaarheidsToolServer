const express = require("express");
const api_helper = require("./API_helper");
const app = express();
const port = 3000;

// Database connection
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "react",
  password: "Weer-Baar-Heid33",
  database: "mydb",
});
connection.connect();

// Database queries
//connection.query(
//  "INSERT INTO User (ID, SharesInfo) VALUES 1, 'Ja'",
//  function (err, fields) {
//    if (err) throw err;
//    console.log("Succes!");
//  }
//);

// app.post("/addUser", function(req, res) {
//     // get data from forms and add to the table called user..

//     let reqBody = req.body;

//     const name = reqBody.id;
//     const email = reqBody.sharesinfo;

//     const queryString = `INSERT INTO User (ID, SharesInfo) VALUES (1, 'Ja')`;

//     connection.query(queryString, function (err, result) {
//     if (err) {
//         // Throw your error output here.
//         console.log("An error occurred.");
//     } else {
//         // Throw a success message here.
//         console.log("1 record successfully inserted into db");
//     }
//   });
//}

app.post("/addUser", (req, res) => {
  // get data from forms and add to the table called user..
  const query = `INSERT INTO User (ID, SharesInfo) VALUES (1, 'Ja')`;

  connection.query(query, function (err, result) {
    if (err) {
      // Throw your error output here.
      console.log("An error occurred.");
    } else {
      // Throw a success message here.
      console.log("1 record successfully inserted into db");
    }
  });
});

app.get("/", (req, res) =>
  res.send("Welcome to Make REST API Calls In Express!")
);

app.get("/getAPIResponse", (req, res) => {
  api_helper
    .make_API_call("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

// Request email information from API
app.get("/getEmailBreaches", (req, res) => {
  let email = req.query.email;

  api_helper
    .make_API_call_key(
      "https://haveibeenpwned.com/api/v3/breachedaccount/",
      email,
      "18b7abde56c449f4aabbdfae21285417"
    )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
