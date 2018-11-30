var app = require('express')()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./server/config/routes')(app)
app.listen(8000, function(){
    console.log("Listening on port 8000")
})