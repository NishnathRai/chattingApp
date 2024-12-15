require("dotenv").config();
const db_URL = process.env._db_URL;
const mongoose = require("mongoose");

async function connect(){
    await mongoose.connect(db_URL);
}

module.exports = connect ;

