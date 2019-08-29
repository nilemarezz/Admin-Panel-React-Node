const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  department:{
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model("AdminUser", UserSchema);
