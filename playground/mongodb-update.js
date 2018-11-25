const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
  useNewUrlParser: true
}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB sever');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID('5bf9b5831d32ee08ab470bbf')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then(result => {
  //     console.log(result);
  //   })

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('5bf82f987ac36e096c293fb2')
    }, {
      $set: { name: 'Rogier' },
      $inc: { age: 1 }
    }, {
      returnOriginal: false
    }).then(result => {
      console.log(result);
    })

  // client.close();
});