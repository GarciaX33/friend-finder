// Your `apiRoutes.js` file should contain two routes:
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
//npm path
var path = require('path');

module.exports = function(app){
    //get route with url api/friends
    app.get('/api/friends', function(req, res){
      res.send('api friends GET method')
    });
    //post routes api/friends
    app.post('/api/friends', function(req, res){
        res.send('api friends POST method')
    })
}