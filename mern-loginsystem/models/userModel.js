const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5},
    displayName: { type: String},
    sites: [
        {
          displayName: {
            type: String
          },
          url: {
            type: String
          }
        }
      ]
});

module.exports = User = mongoose.model("user",userSchema)



