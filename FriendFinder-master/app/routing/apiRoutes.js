var friendMatch = require('../data/friends.js');

//ROUTING
module.exports = function(app) {
  app.get('/api/friends', function (req, res) {
    res.json(friendMatch);
  });
  app.post('/api/friends', function (req, res) {

    var nf = req.body;
    for(var i = 0; i < nf.scores.length; i++) {
      if(nf.scores[i] == "1 (Yes)") {

        nf.scores[i] = 1;
      } else if(nf.scores[i] == "3 (No)") {

        nf.scores[i] = 3;
      } else {

        nf.scores[i] = parseInt(nf.scores[i]);
      }
    }
    
    var comparisonArray = [];

    for(var i = 0; i < friendMatch.length; i++) {
      var comparedFriend = friendMatch[i];
      var totalDifference = 0;
      
      for(var k = 0; k < comparedFriend.scores.length; k++) {
        var differenceOneScore = Math.abs(comparedFriend.scores[k] - nf.scores[k]);
        totalDifference += differenceOneScore;
      }

      comparisonArray[i] = totalDifference;
    }

    var bestFriendNum = comparisonArray[0];
    var bestFriendI = 0;

    for(var i = 1; i < comparisonArray.length; i++) {
      if(comparisonArray[i] < bestFriendNum) {
        bestFriendNum = comparisonArray[i];
        bestFriendI = i;
      }
    }
    friendMatch.push(nf);
    res.json(friendMatch[bestFriendI]);
  });
};