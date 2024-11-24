const mongose = require("mongoose");
const { validate } = require("./userSchema");
const userModel = require("./userSchema");
const {chatWithObjectSchema} = require("./chatWithObjectSchema");

const chatWithSchema = new mongose.Schema({
    userId : {
        type : mongose.Types.ObjectId,
        require : true,
        unique : true,
        index : true,
    },
    chatWith : {
        type : [ mongose.Types.ObjectId ],
    }
});

const chatWithModel = mongose.model('charWith',chatWithSchema);

module.exports = chatWithModel ; 

