var mongoose = require('mongoose');
var schema   = mongoose.Schema;
var restaurantSurveySchema = new schema({  
  restuarantName: String,
  quality       : String,
  service       : String,      
  overallrating : String,
  comments      : String
});

module.exports =  mongoose.model('restaurantSurveyModel', restaurantSurveySchema);
