//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  // console.log('Connected to MongoDB server');
  // db.collection('Todos').find({
  //   _id:new ObjectID('5ade2e04773c615776d7ce35')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch Todos ',err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch Todos ',err);
  // });
  db.collection('Users').find({name:"Awamry"}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch Users ',err);
  });
//  db.close();
});
