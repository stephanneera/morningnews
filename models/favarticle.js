var mongoose = require('mongoose');

var favArticleModel = mongoose.Schema({
      image: String,
      title: String,
      contenu: String,
      token : String,
    });
    var favArticleModel = mongoose.model('favArticles', favArticleModel);

module.exports = favArticleModel;