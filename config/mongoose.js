import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/loginapi', {
 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to the database');
});

export default db;
