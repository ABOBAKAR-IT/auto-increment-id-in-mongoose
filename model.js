
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
                   
const UserSchema = mongoose.Schema({
  user_id:{type:Number},
    name: String,
    email:String,
    role:{
      type:String,
      default:"user",
     
    }
});

UserSchema.plugin(AutoIncrement, {inc_field: "id"});
const User=mongoose.model('User', UserSchema);
module.exports=User

