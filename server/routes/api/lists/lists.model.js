const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default:"List"
    },
    board: {
        type: String,
        required: true
    }
});

let List = mongoose.model("List", listSchema);

module.exports = List;
