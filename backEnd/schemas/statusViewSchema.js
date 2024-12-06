const mongoose = require("mongoose");

const statusViewSchema = new mongoose.Schema({
    userId:{
        type : mongoose.Types.ObjectId,
        require:true,
        index:true,
    }
},
{
    timestamps:true,
});

const statusViewMode = mongoose.model("statusView",statusViewSchema);

export default statusViewMode;