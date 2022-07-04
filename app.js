const express = require("express");
const config = require("./config");
const api_helper = require("./API_helper");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const mysql = require("mysql");

// Connect to database
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.get("/userCount", (req, res) => {
  // get data from forms and add to the table called user..
  const query = `SELECT COUNT(*) AS count FROM User;`;

  connection.query(query, function (err, results) {
    if (err) {
      // Throw your error output here.
      console.log("An error occurred.");
      console.log(err);
    } else {
      // Throw a success message here.
      console.log(
        "Count from User table requested, current user count: " +
          results[0].count
      );
      res.send(results);
    }
  });
});

// Add a user to User table
app.post("/addUser", (req, res) => {
  let id = req.body.id.replace(/\s+/g, "");
  let sharesInfo = req.body.sharesInfo.replace(/\s+/g, "");

  // get data from forms and add to the table called user..
  const query = `INSERT INTO User (ID, SharesInfo) VALUES (${id}, '${sharesInfo}');`;

  connection.query(query, function (err) {
    if (err) {
      // Throw your error output here.
      console.log("An error occurred.");
      console.log(err);
    } else {
      // Throw a success message here.
      console.log("1 user record successfully inserted into db");
    }
    res.json("User added with id: " + id + " and sharesInfo " + sharesInfo);
  });
});

// Add email info to EmailInfo table
app.post("/addEmail", (req, res) => {
  let id = req.body.id.replace(/\s+/g, "");
  let hits = req.body.hits.replace(/\s+/g, "");

  const query = `INSERT INTO EmailInfo (User_ID, Hits) VALUES (${id}, '${hits}');`;

  connection.query(query, function (err) {
    if (err) {
      // Throw your error output here.
      console.log("An error occurred.");
      console.log(err);
    } else {
      // Throw a success message here.
      console.log("1 email record successfully inserted into db");
    }
    res.json("Email added with id: " + id + " and hits " + hits);
  });
});

// Add pw strength and recycles to PasswordInfo table
app.post("/addPassword", (req, res) => {
  let id = req.body.id.replace(/\s+/g, "");
  let strength = req.body.strength.replace(/\s+/g, "");
  let recyclesPW = req.body.recyclesPW.replace(/\s+/g, "");

  const query = `INSERT INTO PasswordInfo (User_ID, PasswordStrength, RecyclesPW) VALUES (${id}, ${strength}, '${recyclesPW}');`;

  connection.query(query, function (err) {
    if (err) {
      // Throw your error output here.
      console.log("An error occurred.");
      console.log(err);
    } else {
      // Throw a success message here.
      console.log("1 password record successfully inserted into db");
    }
    res.json(
      "Password added with id: " +
        id +
        " strength " +
        strength +
        " and recyclesPW " +
        recyclesPW
    );
  });
});

// Request email information from HaveIBeenPwned API
app.get("/getEmailBreaches", (req, res) => {
  let email = req.query.email.replace(/\s+/g, "");

  api_helper
    .make_API_call_key(
      "https://haveibeenpwned.com/api/v3/breachedaccount/",
      email
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
