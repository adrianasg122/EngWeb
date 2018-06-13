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
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.post('/ESS/registar', function (req, res) {
  let pname = req.body.pnome ;
  let uname = req.body.unome ;
  let username = req.body.username ;
  let contacto = req.body.contacto ;
  let password = req.body.password ;
  let plafond = req.body.plafond ;
  let email = req.body.email;
  /** WHERE NOT EXISTS (SELECT username FROM User WHERE username = \'' + username + '\') */
  sql = 'INSERT IGNORE INTO User(username,pname,uname,contact,password,saldo,email) values (\''+username+'\',\''+pname+'\',\''+uname+'\','+contacto+',\''+password+'\','+plafond+',\''+email+'\')';
  console.log(sql)
  connection.query(sql , function (err, results) {
    if (err) throw err
    res.send("Added");
  });
});


app.get('/ESS/users', function (req, res) {
  connection.query('SELECT * FROM User', function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.get('/ESS/user', function (req, res) {
  i = 1 ; 
  console.log('SELECT * FROM User where username = \'' + req.query.username + '\'')
  connection.query('SELECT * FROM User where username = \'' + req.query.username + '\'', function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.get('/ESS/login', function (req, res) {
  i = 1 ; 
  sql = 'SELECT COUNT(username) AS \'exists\' FROM User WHERE username =\''+req.query.username+'\' AND password= \''+req.query.password+'\'';
  console.log(sql)
  connection.query(sql, function (err, results) {

    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.get('/ESS/Coin', function (req, res) {
  var sql = 'SELECT * FROM Coin WHERE id=\'' + req.query.id + '\''
  console.log(sql)
  connection.query(sql, function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.get('/ESS/contratos', function (req, res) {
  var sql = 'SELECT * FROM Contrato WHERE idUser=\'' + req.query.username + '\''
  console.log(sql)
  connection.query(sql, function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});

app.get('/ESS/Contrato', function (req, res) {
  var sql = 'SELECT * FROM Contrato WHERE id=' + req.query.id
  console.log(sql)
  connection.query(sql, function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});

app.post('/ESS/addCont', function (req, res) {
  let user = req.body.user ;
  let id = req.body.id;
  let price = req.body.price ;
  let quant = req.body.quant ;
  let idCoin = req.body.idCoin;
  sql = 'INSERT INTO Contrato(idCoin,idUser,quant,price,venda,concluido) values (\''+idCoin+'\',\''+user+'\','+quant+','+price+',0,0)';
  console.log(sql)
  connection.query(sql , function (err, results) {
    if (err) throw err
    res.send("Added");
  });
});

app.post('/ESS/fechar', function (req, res) {
  let user = req.body.user ;
  let id = req.body.id ;
  let price = req.body.price ;
  let quant = req.body.quant ;
  sql = 'UPDATE INTO Contrato(idCoin,idUser,quant,price,venda,concluido) values (' + id + ',\''+id+'\',\''+user+'\','+quant+','+price+',0,1)';
  console.log(sql)
  connection.query(sql , function (err, results) {
    if (err) throw err
    res.send("Added");
  });
});

app.get('/ESS/hist', function (req, res) {
  var sql = 'SELECT * FROM Contrato WHERE idUser=\'' + req.query.username + '\' AND concluido = 1'
  console.log(sql)
  connection.query(sql, function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.listen(port, () => console.log(`Listening on port ${port}`));

