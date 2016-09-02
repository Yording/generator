var config = require("./config/default");
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var session = require("express-session");
var redisStore= require("connect-redis")(session);
var path = require("path");
// var assets = require(path.join(process.cwd(), './config/default'));
var router = require("./routes");


var app = express();
app.set('views', path.resolve('../client/app/views'));
app.set("view engine","jade");

var sessionRedisMiddleware = session({
	store: new redisStore,
	secret: "my ultra secret",
	saveUninitialized: true,
	resave: false
});

app.use("/assets",express.static("../client/assets"));
app.use("/bower_components",express.static("../client/bower_components"));
app.use("/app",express.static("../client/app"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride());


// var index = function(req, res){
//     console.log("entrar index");
//     res.render('../../includes/navbar',{
//         cssFiles: config.client.css,
//         bowerCssFiles: config.client.bower.css,
//         bowerJsFiles: config.client.bower.js,
//         jsFiles: config.client.js
//     });
// };

// var common = function (req, res) {
//      console.log("entrar name");
//     var name = req.params.name;
//     res.render(name);
// };

app.get('/',function(req,res) {
    res.render('../../index',{
    	cssFiles: config.client.css,
    	bowerCssFiles: config.client.bower.css,
    	bowerJsFiles: config.client.bower.js,
    	jsFiles: config.client.js
    });
});

app.get('/:name',function (req, res) {
    var name = req.params.name;
    res.render(name);
});

app.use("/app",router);

app.listen(3000, function () {
  console.log('app listening on port ' + 3000);
  // console.log(assets);
});
