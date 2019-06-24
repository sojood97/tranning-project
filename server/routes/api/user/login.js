const passport = require('passport');
const express = require('express');
const router = express.Router();

//Login
router.post('/', (req, res, next) => {
    console.log(req.body)
    passport.authenticate('local', function (err, user, info) {
        //console.log("app.post");
        if (err) {
            console.log("there is an error")
            console.log(err)
            return res.status(401).json(err);
        }
        if (user) {
            //const token = user.generateJwt();
            return res.status(200).json({
                "token": user
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res, next)
})

module.exports = router;

