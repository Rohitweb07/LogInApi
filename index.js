import express from 'express';
import routers from './routers/routers.js';
import db from './config/mongoose.js';
import path from 'path';
const port = 3200;
const app = express();


app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use("/", routers);

app.listen(port, function (error) {
  if (error) {
    console.log('Error during port connection');
  }
  console.log('Successfully connected to the server');
});
