var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(__dirname + '/public/dist/public'))
require('./server/config/routes')(app)
app.listen(8000, function(){
    console.log("Listening on port 8000")
})