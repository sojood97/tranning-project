const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default:"Card"
    },
    list: {
        type: String,
        required: true
    },
});

let Card = mongoose.model("Card", cardSchema);

module.exports = Card;
