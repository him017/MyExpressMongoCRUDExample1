/* CRUD functions on restaurantSurvey collection */
require('../db.js'); 
var RestaurantSurvey = require('../models/RestaurantSurveyModel.js');

module.exports = {

  createRestaurantSurvey : function(req, res) {
    // Create a new instance of the restuarantSurvey model
    //var restaurantSurvey = new myPersistance.myModels.restaurantSurveyModel();
    var RestaurantSurveyModel = new RestaurantSurvey();
    
    // Set the restaurantSurvey properties that came from the POST data
    RestaurantSurveyModel.restuarantName = req.body.restuarantName;
    RestaurantSurveyModel.service        = req.body.service;
    RestaurantSurveyModel.quality        = req.body.quality;
  
    // Save the restuarantSurvey and check for errors
    RestaurantSurveyModel.save(function(err) {
    if (err)
      res.send(err);

     res.json({ message: 'restuarantSurvey added !', data: RestaurantSurveyModel });
   });
  },

  findAll : function(res){
      console.log('findAll');
      RestaurantSurvey.find({})
                        .exec(function(err,results){
                           if(err){
                            console.log('Error accoured',err);
                            throw err;
                           }else{
                             console.log(results);
                             res.json(results);
                           }
                        });
    },

    findByName : function(req, res){
      console.log('findByName');
      RestaurantSurvey.findOne({
                        restuarantName : req.params.name
                    })
                    .exec(function(err,results){
                        if(err){
                           console.log('Error accoured',err);
                           throw err;
                        }else{
                          console.log(results);
                          res.json(results);
                        }
                    });
    },

    update : function(req,res){
      console.log('update');
      RestaurantSurvey.findOneAndUpdate({
        restuarantName : req.params.name
      }, 
      {$set:{quality : req.body.quality, 
             service : req.body.service 
            }
      })
      .exec(function(err,results){
            if(err){
               console.log('Error accoured',err);
              throw err;
            }else{
             console.log(results);
             res.json(results);
             }
        }); 
    },
    delete : function(req,res){
      console.log('delete');
      RestaurantSurvey.findOneAndRemove({
        restuarantName : req.params.name
      }) 
      .exec(function(err,results){
            if(err){
               console.log('Error accoured',err);
              throw err;
            }else{
             console.log(results);
             res.json(results);
             }
        }); 

    }
  
};