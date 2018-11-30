var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');
mongoose.Promise = global.Promise;
console.log('mongo file')

module.exports = {
    mongo : mongoose
}