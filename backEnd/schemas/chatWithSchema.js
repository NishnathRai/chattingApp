const mongose = require("mongoose");
const { validate } = require("./userSchema");
const userModel = require("./userSchema");
const {chatWithObjectSchema} = require("./chatWithObjectSchema");

const charWithSchema = new mongose.Schema({
    userId : {
        type : mongose.Types.ObjectId,
        require : true,
        unique : true,
        index : true,
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
    chatWith : {
        type : [ mongose.Types.ObjectId ],
    }
});

const charWithModel = mongose.model('charWith',charWithSchema);

module.exports = charWithModel ; 

