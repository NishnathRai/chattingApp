const mongoose = require("mongoose");
const chatMessageModel = require("../schemas/chatMessageSchema.js");

async function connect () {
  await mongoose.connect("mongodb://localhost:27017/Together");
}

connect();

let FromUserId = "6740c4253d146a1b07f8d4c6";
let ToUserId = "6740c449dff79cdad3429fbf";


async function run(){
    for(let i=0;i<100;i++){
        if(i%2==0) {
            let temp = FromUserId; 
            FromUserId = ToUserId;
            ToUserId=temp;
        }
        ////
        let data = new chatMessageModel({
            FromUserId,
            ToUserId,
            message:i,
        });
        await data.save();
    }
}

run();

