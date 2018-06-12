const express = require('express');
//var bodyParser = require('body-parser');
//var JsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
//app.use(bodyParser());
const port = process.env.PORT || 5000;
var mysql = require('mysql')
var array;
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ESS'
});

connection.connect(function (err) {
  if (err) throw err
  console.log('You are now connected...')
})

var spawn = require("child_process").spawn;
var pythonProcess = spawn('python', ["bd.py"]);

app.get('/ESS', function (req, res, next) {
  var id = 1;
});

app.get('/ESS/coins', function (req, res) {
  connection.query('SELECT * FROM Coin', function (err, results) {
    //console.log("Os resultados são:" + results)
    if (err) throw err
    res.send(JSON.stringify(results));
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));