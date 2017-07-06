const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const myRouter = require('./routes/routes');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public', express.static('public'));

app.use('/', myRouter);

app.listen(3000, (req, res) => {
  console.log("App is running...")
})
