const mongoose = require("mongoose");
const statusSchema = new mongoose.Schema({
    userId:{
       type : mongoose.Types.ObjectId , 
       require : true ,
       index : true ,
       unique : true ,
    },
    StatusData : {
        type : String ,
        require : true ,
    },
    typeOfStatus :{
        type : String ,
        enum : ['text','image'],
        default : 'text'
    },
    expiresAt : {
        type : Date ,
        require : true ,
    }
},  
{
    timestamps:true,
});

const statusModel = mongoose.model('statusData',statusSchema);

module.exports = statusModel;