import express from 'express';
// import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import route from './v2/route';
var app = express();
var url = 'mongodb://localhost/nodetest';
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err, res) {
    if (err) {
      console.log('not connected', err);
    } else {
      console.log('connected');
    }
  }
);
app.get('/', function(req, res) {
  res.send('welcome to home');
});
route(app);

app.listen('3000');
export default app;
