/* Server & Routes Setup */
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

// To get API key from .env
const dotenv = require('dotenv');
dotenv.config();

/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));
console.log(`Your API key is ${process.env.API_KEY}`);

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

app.post('/test', function (req, res) {
  res.status(200).send({ 'key': process.env.API_KEY })
})
app.get('/test', function (req, res) {
  res.status(200).send({ 'key': process.env.API_KEY })
})

app.get('/', function (req, res) {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(fullUrl);
  res.sendFile('dist/index.html')
  // res.sendFile(path.resolve('src/client/views/index.html'))
})
