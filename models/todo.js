//schema of the database is created here
var mongoose=require('mongoose');
//we need a row for name of the toDo and we need creation date too
//we need a boolean for completed which checks whether or not the task is completed
var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
// creates a database model named todo using schema todoSchema
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
