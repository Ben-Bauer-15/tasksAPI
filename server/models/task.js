var mongoose = require('../config/mongoose').mongo
var TaskSchema = new mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean,
    createdAt : Date,
    updatedAt : Date
})
mongoose.model('Task', TaskSchema);
console.log('models file')

module.exports = {
    task : mongoose.model('Task') 
}