var express  = require('express');
var app      = express(); // Create our Express application
var config   = require('./config.js'); 
//In order to accept data via POST or PUT, we need to add another package called body-parser.
var bodyParser = require('body-parser');
var router     = express.Router();

//module.exports = app;
app.disable('x-powered-by'); //security purpose to block server info

app.set('port', process.env.PORT || config.webport);
app.use(express.static(__dirname + config.publicdir));

require("./rest/services")(app);
require("./routes")(router);

router.get('/', function(req, res){
    res.send('Welcome'); 
    console.log("Welcome");
});


// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// mount the router on the app
app.use('/', router);

app.listen(app.get('port'), function () {
	console.log('Express started on localhost:' + app.get('port') + ' [Ctl-C] to terminate');
});
