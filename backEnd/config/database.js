require("dotenv").config();
const db_URL = process.env.db_URL;
const mongoose = require("mongoose");

async function connect(){
    await mongoose.connect(db_URL);
}

module.exports = connect ;

