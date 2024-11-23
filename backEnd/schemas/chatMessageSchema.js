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
    },
    read : {
        type : Boolean,
        default : false ,
        require : true 
    },
});


const chatMessageModel = mongoose.model( 'chatMessage' , chatMessageSchema );

module.exports = chatMessageModel ; 