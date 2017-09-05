var HttpStatus = require('http-status-codes');

module.exports = {

getTodaysDate: function () {
    return new Date(); 
},

getEncodedString : function (request){
  var stringToEncode = request.query.s;
  var base64EncodedString = new Buffer(stringToEncode, 'utf8').toString('base64');    
  return base64EncodedString;
},

sendOkResponse : function(response,  body){
 response.status(HttpStatus.OK).send(body);
}

};