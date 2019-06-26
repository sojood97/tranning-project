
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


userSchema.methods.hashPassword = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const User = mongoose.model("User", userSchema);

module.exports = User;
