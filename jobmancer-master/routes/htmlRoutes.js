var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index2", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });


  app.get('/testingEvan/:id', (req, res) => {
    var promises = [];
    promises.push(db.User.findOne({ where: { id: req.params.id } }), db.Education.findOne({ where: { id: req.params.id } }), db.Cert.findOne({ where: { id: req.params.id } }), db.Skill.findOne({ where: { id: req.params.id } }), db.Extra.findOne({ where: { id: req.params.id } }), db.WorkHistory.findOne({ where: { id: req.params.id } }));
    Promise.all(promises).then(function (response) {
      var info = {
        user: response[0],
        ed: response[1],
        ce: response[2],
        ski: response[3],
        ex: response[4],
        w: response[5]
      }
      console.log(info.user);
      return res.render("testingEvan", info)
    })
  });

  app.get('/testingJesse/:id', (req, res) => {
    var promises = [];
    promises.push(db.User.findOne({ where: { id: req.params.id } }), db.Education.findOne({ where: { id: req.params.id } }), db.Cert.findOne({ where: { id: req.params.id } }), db.Skill.findOne({ where: { id: req.params.id } }), db.Extra.findOne({ where: { id: req.params.id } }), db.WorkHistory.findOne({ where: { id: req.params.id } }));
    Promise.all(promises).then(function (response) {
      var info = {
        user: response[0],
        ed: response[1],
        ce: response[2],
        ski: response[3],
        ex: response[4],
        w: response[5]
      }
      console.log(info.user);
      return res.render("testingJesse", info)
    })
  });


  app.get('/home', (req, res) => {
    res.render("index")
  });

  app.get('/index2', (req, res) => {
    res.render("index2")
  });

  // Load example page and pass in an example by id
  app.get('/login', (req, res) => {
    res.render("login")
  });

  app.get('/signup', (req, res) => {
    res.render("signup")
  });

  app.get('/contact', (req, res) => {
    res.render("contact")
  });

  app.get('/resumeBuilder', (req, res) => {
    res.render("getstarted")
  });

  app.get('/mancerpt1', (req, res) => {
    res.render("mancerpt1")
  });

  app.get('/mancerpt2', (req, res) => {
    res.render("mancerpt2")
  });
  app.get('/mancerpt3', (req, res) => {
    res.render("mancerpt3")
  });

  app.get('/mancerpt4', (req, res) => {
    res.render("mancerpt4")
  });
  app.get('/mancerpt5', (req, res) => {
    res.render("mancerpt5")
  });
  app.get('/mancerpt6', (req, res) => {
    res.render("mancerpt6")
  });
  app.get('/mancercomplete', (req, res) => {
    res.render("mancercomplete")
  });
  app.get('/testingEvan/1', (req, res) => {
    res.render("testingEvan")
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
























// var express = require("express");
// module.exports = (app) => {

//     app.get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     });
//     app.get('/home', (req, res) => {
//         res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     });

//     app.get('/resumeBuilder', (req, res) => {
//         res.sendFile(path.join(__dirname, 'public', 'get-started.html'));
//     });
//     // app.get('/resumeBuilder', function(req, res) {
//     // 	//if (req.session.loggedin) {
//     //     res.sendFile(path.join(__dirname, 'public', 'get-started.html'));
//     // 		//res.send('Welcome, ' + req.session.email + '!');
//     // 	//} else {
//     // 		//res.send('Please login to view this page!');
//     // 	//}
//     // 	//res.end();
//     // });

//     app.get('/contact', (req, res) => {
//         res.redirect("/contact")
//     });


//     app.get('/mancerpt1', (req, res) => {
//         res.redirect("/mancerpt1")
//     });
//     app.get('/mancerpt2', (req, res) => {
//         res.redirect("/mancerpt2")
//     });
// };