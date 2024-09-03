const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
   
  },
  email: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
  
  },
  course:[{
    type:mongoose.Schema.ObjectId,
ref:"courses"
  }],
  recentLesson:[{
    type:mongoose.Schema.ObjectId,
    ref:"courses"
  }],
  quiz:{
type:mongoose.Schema.ObjectId,
ref:"quiz"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role:{
    type:["teacher","student","Hr","parent"]
    
      
  }

});

const User = mongoose.model('User', userSchema);

module.exports = User;
