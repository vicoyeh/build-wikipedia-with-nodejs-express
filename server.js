// NOTES
// ==========================================
// Express is a web framework for Node.js that makes backend configuration easier.
// website: http://expressjs.com
//
// package.json
// guide: http://browsenpm.org/package.json
//
// require() is like #include in C/C++ and import in Java.
// it allows you to load JS files. 


// SETUP
// ==========================================
// creates an Express application
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');


// USE 
// ==========================================
// app.use([path,] function [, function...])
// Mounts the middleware function(s) at the path. If path is not specified, it defaults to “/”
// 
// set the root directory to public
app.use(express.static(__dirname+'/public'));
// bodyParser() lets us get the data from a POST
// we are parsing the data in json format below
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// CONFIG
// ==========================================
var dbConfig = require('./config/db');
var mongoose = require('mongoose');
//Connect to DB
mongoose.connect(dbConfig.url);

// SET
// ==========================================
// app.set(name, value)
// Assigns setting name to value, where name is one of the properties from the app settings table
// ex.
// app.set('title', 'My Site');
// app.get('title'); // "My Site"
// 
// here we're setting our view engine to ejs 
app.set('view engine', 'ejs');
// set views folder directory
app.set('views', __dirname+ '/views');


// ROUTES
// ==========================================
require('./route')(app);


// LAUNCH 
// ==========================================
app.listen(port);