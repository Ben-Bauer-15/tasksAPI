var controller = require('../controllers/tasks')
console.log('routes file')

module.exports = function(app){
    app.get('/', function(req, res){
        controller.index(req, res)
    })

    app.get('/allTasks', function(req, res){
        controller.getAllTasks(req, res)
    })

    app.get('/task/:id', function(req, res){
      controller.getTask(req, res)  
    })

    app.post('/new', function(req, res){
        controller.makeTask(req, res)
    }) 

    app.put('/update/:id/:title/:description/:completed', function(req, res){
        controller.updateTask(req, res)
    })

    app.delete('/delete/:id', function(req, res){
        controller.deleteTask(req, res)
    })
}