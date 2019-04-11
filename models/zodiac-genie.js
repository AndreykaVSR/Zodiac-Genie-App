var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;



 var zodiacGenieSchema = new Schema({
    health: String,
    personalLife: String,
    travel: String,
    profession: String,
    luck: String,
    emotions: String
});


module.exports = mongoose.model('ZodiacGenie', zodiacGenieSchema);