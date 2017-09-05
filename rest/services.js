//REST Services
// /now - returns date
module.exports = function(app){

var utils   = require('../utils/exports.js'); 
var myUtils = utils.myUtils;
app.get('/now', function(request, response) {
  var d = myUtils.getTodaysDate();
  myUtils.sendOkResponse(response, {date: d})
});

// /base64?s=someString - returns base64 of someString
app.get('/base64', function(request, response) {
  var base64EncodedString = myUtils.getEncodedString(request);
  myUtils.sendOkResponse(response, base64EncodedString);
});

}