// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to database');
});

// models/user.js

const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: String
});

module.exports = User;