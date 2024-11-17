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
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ;
              },
              message : `Enter valid email id`
          }
      }
});