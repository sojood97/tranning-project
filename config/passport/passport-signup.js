const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../../server/models/User");
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

// saving user object in the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

//register user
passport.use(
    "local.signup",
    new localStrategy(
        {
            name: "name",
            email: "email",
            password: "password",
            gender: "gender",
            passReqToCallback: true
        },

        (req, name, email, password, done) => {
            console.log("hello");

            User.findOne({ email: email }, (err, user) => {
                console.log("email used");
                if (err) {
                    return done(err);
                }
                if (user) {
                    return done(null, false);
                }

                if (!user) {
                    //create user
                    let newUser = new User();
                    newUser.name = req.body.name;
                    newUser.email = req.body.email;

                    (newUser.password = newUser.hashPassword(
                        req.body.password
                    )),
                        newUser.save((err, user) => {
                            if (!err) {
                                return done(null, user);
                            } else {
                                console.log(err);
                            }
                        });
                }
            });
        }
    )
);
