var mongoose = require('mongoose');

var favArticleModel = mongoose.Schema({
      image: String,
      titre: String,
      contenu: String,
      token : String,
    });
    var favArticleModel = mongoose.model('favArticles', favArticleModel);

module.exports = favArticleModel;