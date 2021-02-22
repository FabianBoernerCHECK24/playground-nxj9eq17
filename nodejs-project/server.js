// {
var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();

var server = express();
server.use(express.static('.'));
server.use(bodyParser.urlencoded({extended: true}));

var db = new sqlite3.Database(':memory:');
db.serialize(function() {
  db.run("CREATE TABLE user (username TEXT, password TEXT, name TEXT)");
  db.run("INSERT INTO user VALUES ('admin', 'admin123', 'App Administrator')");
});
// }

server.get('/', function(req, res) {
  console.log("/ is called on server");
  res.sendFile(path.join(__dirname + '/index.html'));
});

server.post('/login', function (req, res) {
  var username = req.body.username; // a valid username is admin
  var password = req.body.password; // a valid password is admin123
  var query = "SELECT name FROM user where username = '" + username + "' and password = '" + password + "'";

  console.log("username: " + username);
  console.log("password: " + password);
  console.log('query: ' + query);

  db.get(query , [password], function(err, row) {

    if(err) {
      console.log('ERROR', err);
      res.redirect("/index.html#error");
    } else if (!row) {
      res.redirect("/index.html#unauthorized");
    } else {
      res.send('Hello <b>' + row.name + '</b><br /><a href="/index.html">Go back to login</a>');
    }
  });

});

console.log("Opening the server");
server.listen(8080);
console.log('TECHIO> open -p 8080 /');
console.log("Server opened");

