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
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ESS'
});

var spawn = require("child_process").spawn;
spawn('python', ["bd.py"]);


connection.connect(function (err) {
  if (err) throw err
  console.log('You are now connected...')
})


app.get('/ESS/coins', function (req, res) {
  connection.query('SELECT * FROM Coin', function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.post('/ESS/registar', function (req, res) {
  let pname = req.body.pnome;
  let uname = req.body.unome;
  let username = req.body.username;
  let contacto = req.body.contacto;
  let password = req.body.password;
  let plafond = req.body.plafond;
  let email = req.body.email;
  /** WHERE NOT EXISTS (SELECT username FROM User WHERE username = \'' + username + '\') */
  sql = 'INSERT IGNORE INTO User(username,pname,uname,contact,password,saldo,email) values (\'' + username + '\',\'' + pname + '\',\'' + uname + '\',' + contacto + ',\'' + password + '\',' + plafond + ',\'' + email + '\')';
  console.log(sql)
  connection.query(sql, function (err, results) {
    if (err) throw err
    console.log(results.affectedRows)
    res.send(JSON.stringify({uservalid: results.affectedRows}));
  });
});


app.get('/ESS/users', function (req, res) {
  connection.query('SELECT * FROM User', function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.get('/ESS/user', function (req, res) {
  i = 1;
  console.log('SELECT * FROM User where username = \'' + req.query.username + '\'')
  connection.query('SELECT * FROM User where username = \'' + req.query.username + '\'', function (err, results) {
    if (err) throw err
    res.send(JSON.stringify(results));
  })
});


app.get('/ESS/login', function (req, res) {
  i = 1;
  sql = 'SELECT COUNT(username) AS \'exists\' FROM User WHERE username =\'' + req.query.username + '\' AND password= \'' + req.query.password + '\'';
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
  var sql = 'SELECT * FROM Contrato WHERE idUser=\'' + req.query.username + '\' and concluido=0'
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
  let user = req.body.user;
  let id = req.body.id;
  let priceA = req.body.priceA;
  let quant = req.body.quant;
  /**compra -> 0 | venda -> 1 */
  let venda = req.body.venda
  sql = 'INSERT INTO Contrato(idCoin,idUser,quant,priceA,priceF,venda,concluido,dataA) values (\'' + id + '\',\'' + user + '\',' + quant + ',' + priceA + ',0,' + venda + ',0,NOW())';
  console.log(sql)
  connection.query(sql, function (err, results) {
    if (err) throw err
    sql = 'update user set saldo=saldo-' + quant + ' where username=\'' + user + '\'';
    console.log(sql)
    connection.query(sql, function (err, results) {
      if (err) throw err
      res.send("Added");
    });
  });

});

app.post('/ESS/fechar', function (req, res) {
  console.log(req.body);
  let id = req.body.id;
    var sql = 'SELECT * FROM Contrato WHERE id=' + id
    console.log(sql)
    connection.query(sql, function (err, results) {
      if (err) throw err
      let user = results[0].idUser
      let valueTransaction = results[0].priceA;
      let unitsTransaction = results[0].quant / results[0].priceA;
      let idCoin = results[0].idCoin
      let buySell = results[0].venda;
      var sql = 'SELECT * FROM Coin WHERE id=\'' + idCoin + '\''
      connection.query(sql, (err, results) => {
        if (err) throw err
        let currentValue = results[0].price;
        let amount = ((buySell === 0) ?
          (currentValue - valueTransaction) * unitsTransaction + valueTransaction * unitsTransaction :
          (valueTransaction - currentValue) * unitsTransaction + valueTransaction * unitsTransaction);
        sql = 'update user set saldo=saldo+' + amount + ' where username=\'' + user + '\'';
        console.log(sql)
        connection.query(sql, function (err, results) {
          console.log(currentValue)
          sql = 'UPDATE Contrato SET concluido=1 ,priceF='+currentValue+' , dataF=NOW() WHERE id=' + id;
          console.log(sql)
          connection.query(sql, function (err, results) {
          if (err) throw err
          res.send("Added");
        })
        });
      })
    })
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

