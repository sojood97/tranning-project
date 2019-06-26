const passport = require('passport');
const express = require('express');
const router = express.Router();

var jwt = require('jsonwebtoken');
var config = require('../../../../config/auth/config');
var VerifyToken = require('../../../../config/auth/VerifyToken');
const User = require('../../../models/User');

//Login
router.post('/', (req, res, next) => {
    //console.log(req.body)
    passport.authenticate('local', function (err, user, info) {
        //console.log("app.post");
        if (err) {
            //console.log("there is an error")
            console.log(err)
            return res.status(401).json({
                "status": "fail",
                "msg": err,
            });
        }
        if (user) {
            //const token = user.generateJwt();
            const token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            return res.status(200).json({
                "status": "success",
                "token": token
            });
        } else {
            res.status(401).json({
                "status": "fail",
                "msg": info,
            });
        }
    })(req, res, next)
})


//to get the user id based on the token we got back from the login endpoint
router.get('/me', VerifyToken, function (req, res, next) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send({ auth: false, message: 'There was a problem finding the user.' });
        if (!user) return res.status(404).send({ auth: false, message: 'No user found.' });
        res.status(200).send( { auth: true, user: user });
    });

});

module.exports = router;

