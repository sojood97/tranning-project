"use strict";

var express = require("express");
var router = express.Router();
const User = require("../../../models/User");

const passport = require("passport");

router.post("/", function(req, res) {
    var body = req.body,
        name = body.name,
        email = body.email,
        password = body.password;
    User.findOne(
        {
            email: email
        },
        function(err, user) {
            if (err) {
                res.status(500).send("error occured");
            } else {
                if (user) {
                    console.log("email already exists");
                    var m = res.JSON({ msg: "email already exists" });

                    var s = JSON.stringify(m);
                    console.log(m);
                    console.log(s);
                } else {
                    var users = new User();
                    users.name = name;
                    users.email = email;

                    users.password = users.hashPassword(password);
                    users.save(function(err, user) {
                        if (err) {
                            res.status(500).send("db error");
                        } else {
                            res.json({ user });
                        }
                    });
                }
            }
        }
    );
});

module.exports = router;
