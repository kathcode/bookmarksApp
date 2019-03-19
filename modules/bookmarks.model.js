const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookmarkSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  link: { type: String, required: true, max: 200 },
  tags: { type: Array, required: false, max: 200 }
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
