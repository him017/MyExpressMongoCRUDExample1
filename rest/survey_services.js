
  var myDaos = require('../persistance/daos/restaurantDao.js');
  
  module.exports = function(surveyRoutes, req, res){
    'use strict';
    surveyRoutes.restaurantsurveyRoute.post(function(req, res) {
      console.log('Post restaurantsurvey');
      myDaos.createRestaurantSurvey(req,res);
    }),

    surveyRoutes.restaurantsurveyRoute.get(function(req, res) {
      console.log('get restaurantsurvey');
      try{
       myDaos.findAll(res);
      }catch(err){
        res.send(err);
      }
    }),
    surveyRoutes.restaurantsurveyRouteByName.get(function(req, res) {
      console.log('get restaurantsurvey ByName');
      try{
        myDaos.findByName(req, res);        
      }catch(err){
          res.send(err);
      }
    }),
    surveyRoutes.restaurantsurveyRouteByName.put(function(req, res) {
      console.log('update restaurantsurvey ByName');
      try{
        myDaos.update(req, res);        
      }catch(err){
          res.send(err);
      }
    }),
    surveyRoutes.restaurantsurveyRouteByName.delete(function(req, res) {
      console.log('delete restaurantsurvey ByName');
      try{
        myDaos.delete(req, res);        
      }catch(err){
          res.send(err);
      }
    })   
  }
