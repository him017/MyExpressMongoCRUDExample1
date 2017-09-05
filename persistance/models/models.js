//we could create all schemas in one js file like below
/*
var mongoose = require('mongoose');
var schema   = mongoose.Schema;
var restaurantSurveySchema = new schema({  
  restuarantName: String,
  quality       : String,
  service       : String,      
  overallrating : String,
  comments      : String
});

var restaurantSurveyModel =  mongoose.model('restaurantSurveyModel', restaurantSurveySchema);
module.exports.restaurantSurveyModel = restaurantSurveyModel;
*/



