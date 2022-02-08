let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String},
    age: {type: Number, default: 18},
}, );

let User = mongoose.model("User", userSchema);
module.exports = User; 