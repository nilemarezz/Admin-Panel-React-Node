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
  age:{
    type:Number,
    required: true
  },
  gender:{
    type:String,
    required:true
  }
  
  
});

module.exports = mongoose.model("UserCustomer", UserSchema);
