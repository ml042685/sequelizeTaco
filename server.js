// Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

// Express app.
var app = express();
app.use(express.static('public'));

// Bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// override with POST having ?_method=DELETE or PUT
app.use(methodOverride('_method'));

// Handlebars 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes
var routes = require('./controllers/burgers_controllers.js');
app.use(routes);

// Initiate listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});