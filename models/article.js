var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  date: String,
  url: String,
  favorited: {
    type: Boolean,
    default: false
  }
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
