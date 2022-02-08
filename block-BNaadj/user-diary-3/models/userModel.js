let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age:{type:Number, default: 18},
    address: String,
    bio: String,
    hobbies: [String]
});

let User = mongoose.model("User", userSchema);

module.exports = User; 