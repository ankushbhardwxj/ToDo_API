var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");
//all the logic is sent to the helpers files
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo)

router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)

 module.exports = router;
