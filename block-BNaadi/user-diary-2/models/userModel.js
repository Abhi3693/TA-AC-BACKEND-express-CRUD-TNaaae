let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: String,
    age:{type:Number, default: 18},
    bio: String
});

let User = mongoose.model("User", userSchema);

module.exports = User;