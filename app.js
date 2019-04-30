var path = require('path');
var express = require('express');
var app = express();

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

//Service of static directories
app.use( express.static(path.join(__dirname, 'public')) );
app.use( '/libs', express.static(path.join(__dirname, 'libs')) );
app.use( '/assets', express.static(path.join(__dirname, 'assets')) );


app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Tata penguin server running at 3000!');
});
