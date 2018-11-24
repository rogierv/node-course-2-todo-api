const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB sever');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bf82e994ee22109628e7e1d')
  //  }).toArray().then(docs => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, err => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then(count => {
    console.log(`Todos: ${count}`);
  }, err => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users')
    .find({name: 'Rogier Verkaik'})
    .toArray()
    .then(docs => {
      console.log(JSON.stringify(docs, undefined, 2));
  }, err => {
    console.log('Unable to fetch users', err);
  });

  // client.close();
});