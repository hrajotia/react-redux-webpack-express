import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.config.js';

var app = express();
var PORT = process.env.PORT || 8080;
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler))

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

app.get('/api/v1/data', (req, res) => {
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
