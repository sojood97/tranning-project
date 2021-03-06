const fs = require("fs");

const express = require("express");
const historyApiFallback = require("connect-history-api-fallback");
const mongoose = require("mongoose");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const config = require("../config/config");
const passport = require("passport");

const webpackConfig = require("../webpack.config");

const isDev = process.env.NODE_ENV !== "production";

const port = process.env.PORT || 8080;


//const passportSetup = require('../config/')

const app = express();

// Passport Config
require("../config/passport/passport_login")(passport);
//passport
app.use(passport.initialize());
app.use(passport.session());

// Set up Mongoose
mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.Promise = global.Promise;

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API routes
require("./routes")(app);

if (isDev) {
    const compiler = webpack(webpackConfig);

    app.use(
        historyApiFallback({
            verbose: false
        })
    );

    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            contentBase: path.resolve(__dirname, "../client/public"),
            stats: {
                colors: true,
                hash: false,
                timings: true,
                chunks: false,
                chunkModules: false,
                modules: false
            }
        })
    );

    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(path.resolve(__dirname, "../dist")));
} else {
    app.use(express.static(path.resolve(__dirname, "../dist")));
    app.get("/", function(req, res) {
        res.send("Welcome to Passport with Sequelize and without HandleBars");
    });
}

const seed = require("../config/seed/seed");
seed();

app.listen(port, "0.0.0.0", err => {
    if (err) {
        console.log(err);
    }

    console.info(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", port);
});

module.exports = app;
