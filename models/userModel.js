var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
 mealname: String,
  mealprice: String ,
   fat: String,
  carbohydrate: String ,
   protein: String,

 });
var User = mongoose.model('client', userSchema);
module.exports = User;
