var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  age: Number

});

var User = mongoose.model('User', UserSchema)

module.exports = User;