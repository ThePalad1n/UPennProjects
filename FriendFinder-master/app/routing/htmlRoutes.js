var path = require('path');

module.exports = function(app){
//Get
 app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

 //USE
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
};