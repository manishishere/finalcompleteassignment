var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
name: { type: String,
 		 required: true,
  	 	index: { unique: true },
  	 	 date: { type: Date, default: Date.now }
  	},
password: {
    	type: String,
    	 required: true,
    	  date: { type: Date, default: Date.now },
    	   hide: true,
    	    select: false,
    	    hidden : true,
    	}
 });
var login = mongoose.model('checks', userSchema);
module.exports = login;
