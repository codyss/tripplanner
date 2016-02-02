var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');


var port = process.env.PORT || 3000;

app.use(require('./routes'));


//swig set up
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});

//logging and body parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));


//routing for static files
app.use(express.static(path.join(__dirname, 'public')));


// 404 not found error page
app.use(function(err, req, res, next) {

})


//error handling
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  //render some html
})



app.listen(port, function () {
  console.log('Server is now listening! on port: ', port);
});





