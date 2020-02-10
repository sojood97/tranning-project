"use strict";

var express = require("express");
var router = express.Router();
const User = require("../../../models/User");

const passport = require("passport");

router.post("/signup", function (req, res) {
    var body = req.body,
        name = body.name,
        email = body.email,
        password = body.password,
        gender = body.gender;
    User.findOne(
        {
            email: email
        },
        function (err, user) {
            if (err) {
                res.status(500).send("error occured");
            } else {
                if (user) {
                    res.json(
                        "email already exists ,enter another email or login"
                    );
                } else {
                    var users = new User();
                    users.name = name;
                    users.email = email;
                    users.gender = gender;

                    users.password = users.hashPassword(password);
                    users.save(function (err, user) {
                        if (err) {
                            res.status(500).send("db error");
                        } else {
                            // res.json({ user });
                            res.json("success  register");
                        }
                    });
                }
            }
        }
    );
});

module.exports = router;
