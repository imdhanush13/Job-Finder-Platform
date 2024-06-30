
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    email: String,
    password: String,
    cpassword: String,
});
module.exports.Books = mongoose.model("Books",bookSchema);