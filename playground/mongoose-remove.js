const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove((result) => {
//   console.log(result);
// });

// Todo.deleteMany((result) => {
//   console.log(result);
// })

// Todo.findOneAndRemove()

Todo.findByIdAndDelete('5c14f868a3749e5be525eb9b').then((todo) => {
  console.log(todo);
});
