const mongoose = require("mongoose");
const { validate } = require("./userSchema");


const chatWithObjectSchema = new mongoose.Schema({
     userId : {
        type : mongoose.Types.ObjectId,
        require : true ,
        validate :{
            validator :async (val)=>{
                try{
                    let result = await userModel.findById(val);
                    if( result==null ) return false;
                    else true;
                }
                catch(err) {return false;}
            },
            message : `user not found`
        }
     },
     unReadMessagesCount : {
        type : Number ,
        default : 0 ,
        require : true,
     },
     lastMessage : {
        type : String ,
        default : '',
     },
},{timestamps:true});

const  chatWithObjectModel = mongoose.model("chatWithObject",chatWithObjectSchema);

module.exports = {
    chatWithObjectSchema,
    chatWithObjectModel,
}