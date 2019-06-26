
module.exports = (app) => {
    app.use('/api/users', require('./api/user/login'));
    app.use("/api/users", require("./api/user/signup"));

}


