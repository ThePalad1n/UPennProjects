var db = require("../models");

$(document).ready(function() {
    $.get("/api/users").then(function(dbUser) {
        res.json(dbUser);
    });
  });

  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  