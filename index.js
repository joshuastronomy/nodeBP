//The Iron Yard Cohort 7, Indianapolis, IN
//nodejs Application Boilerplate
//*****ANYTHING MARKED (arb) IS ARBITRARY, MEANING YOU CAN USE ANY NAME YOU WANT
//*****JUST BE CONSISTENT WITH IT!!!!!
//---------------------------------------------------
//Most of our applications are written using the Express application framework
//for nodejs.  This is what makes most of our middleware work.
const express = require('express');
//Mustache Express is our template engine of choice.  This is what makes our
//application render the data it receives from the backend, via {{}}.
const mustacheExpress = require('mustache-express');
//req.body and other body parsing requests don't work without body-parser
//installed.
const bodyParser = require('body-parser');
//We define myRouter(arb) and have it point to where our routes live.  This is
//how our app.use('/'), myRouter line below knows what myRouter actually means.
const myRouter = require('./routes/routes');
//Defining app(arb) as an express app makes the rest of these sets, uses, and
//definitions work correctly.  This has to be at or near the top!
const app = express();

//This lets our app, defined just above, know that Mustache Express is our
//template engine.  the first app.set tell the engine 'views' to look in our
//'./views'(arb) directory for template files.
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
//This block tells exactly how body-parser does its parsing.  If we ever need
//to change its behavior, we'll cross that bridge when we come to it.
app.use(bodyParser.urlencoded({
  extended: true
}));
//Sometimes we need to make files like pictures or raw data available to the
//user.  When the user's client goes to '/public'(arb) on their end, then our
//directory called 'public'(arb) is made available for the user's client to
//download resources from.  These two arguments don't have to be named the same
//thing, but probably should.
app.use('/public', express.static('public'));
//This tells our app to use a set of routes that we built, defined above as
//myRouter, from the root directory of the app.
app.use('/', myRouter);
//This gets the app running locally. Port number can be 3000-8000.
//localhost:(portnumber) in your browser.
app.listen(3000, (req, res) => {
  console.log("App is running...")
})
