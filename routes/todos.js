var express = require('express');
var router = express.Router();
//express router is used to route the requests
var db = require("../models");
var helpers = require("../helpers/todos");
//every route occurs due to the functions written in the
//helper files
//all the logic is sent to the helpers files
//this is the route for get and post request
router.route('/')
.get(helpers.getTodos) //look for exports.getTodos
.post(helpers.createTodo)
//this is the route for get, put and delete
router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)

 module.exports = router;
