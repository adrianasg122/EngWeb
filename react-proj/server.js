const express = require('express');
var bodyParser = require('body-parser');
var JsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
app.use(bodyParser());
const port = process.env.PORT || 5000;
var mysql = require('mysql')
var array;
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'ESS'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

app.get('/ESS', function(req, res, next) {
  var id = 1;
<<<<<<< HEAD
});

app.get('/ESS/coins', function (req, res) {
  connection.query('SELECT * FROM Coin', function (err, results) {
    console.log("Os resultados são:" + JSON.stringify(results))
=======
  /*
  app.post('/contact', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    id=req.body.textbox;
  })
  */
  var r;
  id = '1';
  username = 'eletro'
  console.log(id);
  connection.query('SELECT * FROM Utilizador WHERE username = "' + username + '"', function(err, results) {
    console.log("Os resultados sao:" + results)
>>>>>>> 38eb8666531efdc76ca1dbec9f89010127b57a31
    if (err) throw err
    r=results[0];
    res.send({ express: JSON.stringify(r)});
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

