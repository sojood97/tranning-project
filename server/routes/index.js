const fs = require("fs");
const path = require("path");

module.exports = app => {
    // API routes
    app.use("/api/users", require("./api/user/signup"));
    app.use("/api/lists", require("./api/lists/lists.index"));
    app.use("/api/boards", require("./api/boards/boards.index"));
    app.use("/api/cards", require("./api/cards/cards.index"));
};
