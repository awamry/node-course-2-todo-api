const {ObjectID}= require('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
//Todo.findByIdAndRemove
Todo.findOneAndRemove({_id:'5adfcaa0dea2a24ff693432a'}).then(() => {

});
Todo.findByIdAndRemove('5adfcaa0dea2a24ff693432a').then((todo) => {
  console.log(todo);
});
