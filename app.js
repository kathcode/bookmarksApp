const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const bookmark = require('./routes/bookmarks.route');
// Intialize the express app
const app = express();

// Database configuration
let dev_db_url = 'mongodb://kath:kath123@ds117806.mlab.com:17806/bookmarks';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bookmarks', bookmark);

let port = 2772;

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});