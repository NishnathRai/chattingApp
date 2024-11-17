const db_URL = "mongodb://localhost:27017/Together";
const mongoose = require("mongoose");

async function connect(){
    await mongoose.connect(db_URL);
}

module.exports = connect ;

