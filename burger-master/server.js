var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var burgers = require("./models/burgers");

var port = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);

app.listen(port);	