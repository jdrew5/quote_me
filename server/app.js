require('dotenv').load({silent: true});

var express = require('express');
var app = express();

var path = require('path');

var bodyParser = require('body-parser');

var data = require('./routes/data');
var index = require('./routes/index');

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/data', data);
app.use('/', index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;
