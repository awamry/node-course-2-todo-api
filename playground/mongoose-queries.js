const {ObjectID}= require('mongodb');
const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5adfad3dcdb1fd702a68d3ca11';
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e) => {
//   console.log(e);
// });
var id = '5ade50a53f833d58438cc93f';
User.findById({
  _id : id
}).then((user) => {
  if(!user)
  {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e) => {
    console.log(e);
});
