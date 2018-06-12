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
});

app.get('/ESS/coins', function (req, res) {
  connection.query('SELECT * FROM Coin', function (err, results) {
    //console.log("Os resultados são:" + JSON.stringify(results))
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});

app.post('/ESS/post', function (req, res) {
  let pname = req.body.pname ;
  let uname = req.body.uname ;
  let username = req.body.username ;
  let contacto = req.body.contacto ;
  let password = req.body.password ;
  let plafond = req.body.plafond ;
  console.log(d.pnome);
  connection.query('INSERT INTO User values (?,?,?,?,?,?)', {pname:pname} , {uname:uname} , {username:username} , {contacto:contacto} , {password:password} , {plafond:plafond} , function (err, results) {
    //console.log("Os resultados são:" + JSON.stringify(results))
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});

app.get('/ESS/users', function (req, res) {
  connection.query('SELECT * FROM User', function (err, results) {
    //console.log("Os resultados são:" + JSON.stringify(results))
    if (err) throw err
    res.send(JSON.stringify("Added!!"));
  })
});




app.listen(port, () => console.log(`Listening on port ${port}`));

