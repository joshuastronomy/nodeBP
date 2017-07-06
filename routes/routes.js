//The Iron Yard Cohort 7, Indianapolis, IN
//nodejs Application Boilerplate
//*****ANYTHING MARKED (arb) IS ARBITRARY, MEANING YOU CAN USE ANY NAME YOU WANT
//*****JUST BE CONSISTENT WITH IT!!!!!
//---------------------------------------------------
//Same is in our index.js, anything that calls on express needs to have express
//defined.
const express = require('express');
//Any time we call router(arb) on any http requests (get, post, etc.), it's
//using the express.Router() middleware, so we need to tell it that.
const router = express.Router();

//Write your routes!
router.get('/', (req, res) => {

});

//This needs to be exported as a module so your index.js file can see it.  
module.exports = router;
