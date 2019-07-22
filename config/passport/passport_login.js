const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt-nodejs");

// Load User model
const User = require("../../server/models/User");

module.exports = function(passport) {
    passport.use(
        new LocalStrategy(
            { usernameField: "email" },
            (email, password, done) => {
                //console.log("passport.use");
                // Match user
                User.findOne({
                    email: email
                }).then(user => {
                    if (!user) {
                        //console.log("That email is not registered");
                        return done(null, false, {
                            message: "That email is not registered"
                        });
                    }
                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            Console.log("error in login page");
                            throw err;
                            
                            
                        }
                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, {
                                message: "Password incorrect"
                            });
                        }
                    });
                });
            }
        )
    );

    passport.serializeUser(function(user, done) {
        //console.log("serializeUser");
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        //console.log("deserializeUser");
        User.findById(id)
            .then(user => done(null, user))
            .catch(done);
    });
};
