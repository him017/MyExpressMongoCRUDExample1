   var mongoose = require('mongoose');
   var myconfig = require('../config.js');
   var db       = mongoose.connect(myconfig.dburl);
   //var myModels = require('./models.js');
   //module.exports.myModels = myModels;
    
  
  //db.on('error', console.error.bind(console, 'connection error:'));
  //db.once('open', function() {
   //console.info("db connection success !!!")
  //});
  
