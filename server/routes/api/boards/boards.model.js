const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const boardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default:"Board"
    }
});

let Board = mongoose.model("Board", boardSchema);

module.exports = Board;
