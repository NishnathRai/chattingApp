const bcrypt = require("bcrypt");

async function isPsswordCorrect(user,inputPassword){
    const isIt = await bcrypt.compare(inputPassword,user.password);
    if(!isIt) throw Error("Please enter Vaild info");
    else return;
} 

module.exports = isPsswordCorrect ; 