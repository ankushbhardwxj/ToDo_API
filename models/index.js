//boiler plate for mongodb
var mongoose = require('mongoose');
mongoose.set('debug',true);
//mongoose.connect used to connect to mongodb database
mongoose.connect('mongodb://localhost/todo-api');
//mongo promise initialised
mongoose.Promise = Promise;
module.exports.Todo = require("./todo");
