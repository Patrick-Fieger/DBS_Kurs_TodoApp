var mongoose = require('mongoose');


var EntrySchema = mongoose.Schema({
  id : { type: String, required: true, unique : true},
  aufgabe : {type : String},
  zeit : {type : Date},
  prio : {type : String}
});

var Entry = mongoose.model('Entry', EntrySchema);
module.exports = Entry;