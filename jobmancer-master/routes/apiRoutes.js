var db = require("../models");
var express = require("express");
module.exports = (app) => {
  //post
  app.post('/email', (req, res) => {
    const { subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function (err, data) {
      if (err) {
        res.status(500).json({ message: 'Error: 01F4 (internal error)' })
      }
      else {
        res.json({ message: 'Email Sent Successfully' })
      }
    });
  });

  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });


  // Get all examples
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new example
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get all examples
  app.get("/api/resume", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new example
  app.post("/api/resume", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });



  app.get("/api/educations", function (req, res) {
    db.Education.findAll({}).then(function (dbEducations) {
      res.json(dbEducations);
    });
  });

  // Create a new example
  app.post("/api/educations", function (req, res) {
    db.Education.create(req.body).then(function (dbEducation) {
      res.json(dbEducation);
    });
  });

  app.get("/api/certs", function (req, res) {
    db.Cert.findAll({}).then(function (dbCerts) {
      res.json(dbCerts);
    });
  });

  // Create a new example
  app.post("/api/certs", function (req, res) {
    db.Cert.create(req.body).then(function (dbCert) {
      res.json(dbCert);
    });
  });

  app.get("/api/skills", function (req, res) {
    db.Skill.findAll({}).then(function (dbSkills) {
      res.json(dbSkills);
    });
  });

  // Create a new example
  app.post("/api/skills", function (req, res) {
    db.Skill.create(req.body).then(function (dbSkill) {
      res.json(dbSkill);
    });
  });

  app.get("/api/extras", function (req, res) {
    db.Extra.findAll({}).then(function (dbExtras) {
      res.json(dbExtras);
    });
  });

  // Create a new example
  app.post("/api/extras", function (req, res) {
    console.log("string", typeof req.body)
    db.Extra.create(req.body).then(function (dbExtra) {
      res.json(dbExtra);
    });
  });

  app.get("/api/workhistorys", function (req, res) {
    db.WorkHistory.findAll({}).then(function (dbWorkHistorys) {
      res.json(dbWorkHistorys);
    });
  });

  // Create a new example
  app.post("/api/workhistorys", function (req, res) {
    console.log("string", typeof req.body)
    db.WorkHistory.create(req.body).then(function (dbWorkHistory) {
      res.json(dbWorkHistory);
    });
  });

};
