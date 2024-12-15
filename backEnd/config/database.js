require("dotenv").config();
const db_URL = process.env._DBURL;
const mongoose = require("mongoose");

async function connect(){
    await mongoose.connect(db_URL);
}

module.exports = connect ;

