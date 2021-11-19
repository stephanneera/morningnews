var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
      username: String,
      password: String,
      email: String,
      token : String,
    });
    var UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;