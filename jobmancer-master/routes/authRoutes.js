var express = require("express");
var db = require("../models");

module.exports = (app) => {
    app.post('/auth', (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        if (email && password) {
            Account.fetchPasswordForUser(email, password, (results) => {
                if (results.length > 0) {
                    req.session.email = email;
                    req.session.password = password;
                    res.redirect('/');
                } else {
                    res.send('Incorrect Email and/or Password!');
                }
                res.end();
            });
        }
        else {
            res.send('Please enter Email and Password!');
            res.end();
        }
    });

    app.post('/signinauth', (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        if (email && password) {
            Account.createAccount(email, password, (results) => {
                if (res.length > 0) {
                    req.session.email = email;
                    req.session.password = password;
                    res.redirect('/login');
                } else {
                    res.send('Invalid Email and/or Password!');
                }
                res.end();
            });
        }
        else {
            res.send('Please enter a valid Email and Password!');
            res.end();
        }
    });


    app.get("/login", (req, res) => {
        res.redirect("/login")
    });

    app.get('/signup', (req, res) => {
        res.redirect("/signup")
    });
};