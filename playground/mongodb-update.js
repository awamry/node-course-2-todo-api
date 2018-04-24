//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5ade3c08773c615776d7d371')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   name:'Abdallah'
  // },{
  //   $set:{
  //     name:'Awamry'
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name : 'Awamry'
  },{
    $inc:
    {
      age:1
    }
  },{
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  })
});
//  db.close();Z