import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.set('views', './views') // specify the views directory
app.set('view engine', 'pug') // register the template engine

app.get('/', function (req, res) {
  res.render('layout', {})
});

app.get('/data', (req, res) => {
  return res.json({
    user: {
      name: 'Test User'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
  console.log('Press Ctrl+C to quit.')
});
