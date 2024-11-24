const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
    FromUserId :{
        type : mongoose.Types.ObjectId ,
        require : true ,
    },
    ToUserId: {
        type : mongoose.Types.ObjectId ,
        require : true ,
    },
    message : {
        type : String ,
        require : true,
    },
    messageType : {
        type : String ,
        enum : [ 'text' ,'image' ],
        require : true,
        default:"text",
    },
    read : {
        type : Boolean,
        default : false ,
        require : true 
    },
},{timestamps:true});

chatMessageSchema.index({ FromUserId: 1, ToUserId: 1 });

const chatMessageModel = mongoose.model( 'chatMessage' , chatMessageSchema );

module.exports = chatMessageModel ; 