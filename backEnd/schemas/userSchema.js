const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
      userName  :{
         type  : String,
         validate :{
            validator : function(val){
                return val.length>5;
            },
            message :`Please enter valid user name (min 6 characters)`
         }
      },
      email : {
          type : String ,
          validate : {
              validator :function (val){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) ;
              },
              message : `Enter valid email id`
          },
          index:true,
          unique:true
      },
      password : {
          type : String ,
          validate : {
              validator : function(val){
                 return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(val);
              },
              message : `a minimum length of 6 characters and a mix of lowercase letters, uppercase letters digits, and special characters`,
          }
      },
      bio :{
          type : String ,
          validate : {
            validator : function(val){
                return  val.length>=10 && val.length<=100;
            },
            message : ` At least 10 characters and max 100 characters`
          },
          default : `The end is the Beginning 🚀`
      },
      status : {
          type : String ,
          validate : {
              validator : function(val){
                return val.index>=5 && val.length<=20;
              },
              message : ` At least 5 characters and max 20 characters`
          },
          default : `Together 🫶`
      },
      profilePicture : {
          type : String,
          validate : {
              validator : function(val){
                 return val.length>=1;
              },
              message : `Cannot push an empty Image`
          },
          default : `https://i.pinimg.com/736x/e4/96/d7/e496d7ccf54886ee88eaab0717c27250.jpg`
      }
});

const userModel = mongoose.model('User',userSchema);

module.exports = userModel ;