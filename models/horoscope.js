var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;



 var horoscopeSchema = new Schema({
    currentDate: Date,
    compatibility: String, 
    luckyNumber: Number,
    luckyTime: Date,
    color: String,
    dateRange: Date,
    Mood:String,
    Description: String
});


module.exports = mongoose.model('ZodiacGenie', horoscopeSchema);