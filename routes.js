
// Create a new route with the prefix /restaurantsurvey


module.exports = function(router){
    var surveyRoutes = {
       restaurantsurveyRoute       : router.route('/restaurantsurvey'),
       restaurantsurveyRouteByName : router.route('/restaurantsurvey/:name')
    }
    require('./rest/survey_services')(surveyRoutes);
}