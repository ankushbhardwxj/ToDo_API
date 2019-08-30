var db = require('../models');
//find and list all the todos from the API
exports.getTodos = function(req, res){
  db.Todo.find()
  .then(function(todos){
    res.status(201).json(todos);
  })
  .catch(function(err){
    res.send(err);
  })
}
//create a new todo on the API.
exports.createTodo = function(req,res){
  db.Todo.create(req.body)
  .then(function(newTodo){
    res.json(newTodo);
  })
  .catch(function(err){
    res.send(err);
  });
}

exports.getTodo = function(req,res){
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo){
    res.json(foundTodo);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.updateTodo =function(req,res){
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new:true})
  .then(function(todo){
    res.json(todo);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.deleteTodo = function(req,res){
  db.Todo.remove({_id: req.params.todoId})
  .then(function(){
    res.json({message: 'we deleted it'})
  })
  .catch(function(err){
    res.send(err);
  })
}

module.exports = exports;
