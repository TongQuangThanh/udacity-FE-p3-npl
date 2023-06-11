const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(express.static("dist"));

const apiKey = process.env.API_KEY;
console.log(`Your api key is ${apiKey}`); // Used for testing API key entry

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/api-param", async (req, res) => {
  res.status(200).send({ 'key': process.env.API_KEY })
});
