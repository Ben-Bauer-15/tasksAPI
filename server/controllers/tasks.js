var Task  = require('../models/task').task
console.log('controllers file')

module.exports = {
    index : function(req, res){
        res.sendFile(__dirname + 'index.html')
    },
    
    getAllTasks : function(req, res){
        Task.find({}, function(err, tasks){
            if (err){
                res.send("Something went wrong")
            }
            else {
                res.json({Message : "Success", data : tasks})
            }
        })
    },

    getTask : function(req, res){
        Task.find({_id : Object(req.params.id)}, function(err, task){
            if (err){
                res.send("Something went wrong")
            }
            else {
                res.json({Message : "Success", data : task})
            }
        })
    },

    makeTask : function(req, res){
        var newTask = new Task({title : req.body.title, description : req.body.description, completed : false, createdAt : new Date(), updatedAt : new Date()})
        newTask.save(function(err){
            if (err){
                    res.send("Something went wrong")
            }
            else {
                res.json({Message : "Success", data : newTask})
            }
        })
    },

    updateTask : function(req, res){
        Task.updateOne({_id : Object(req.params.id)}, {$set : {title : req.params.title, description : req.params.description, completed : req.params.completed, updatedAt : new Date()}}, function(err){
            if (err){
                res.send("Something went wrong")
            }
            else {
                res.json({Message : "Success"})
            }
        })
    },


    deleteTask : function(req, res){
        Task.remove({_id : Object(req.params.id)}, function(err){
            if (err){
                res.send("Something went wrong")
            }
            else {
                res.json({Message : "Success"})
            }

        })
    }
}