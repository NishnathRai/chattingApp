const mongoose = require("mongoose");
const { validate } = require("./userSchema");


const chatWithObjectSchema = new mongoose.Schema({
     userId : {
        type : mongoose.Types.ObjectId,
        require : true ,
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