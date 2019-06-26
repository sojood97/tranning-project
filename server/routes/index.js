const fs = require("fs");
const path = require("path");

module.exports = app => {
    // API routes

    app.use("/api/users", require("./api/user/signup"));
};
