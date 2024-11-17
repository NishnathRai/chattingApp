function Vaild(index,email,password,userName){
    if(index==0) {
       return  signin(email,password);
    }
    else{
       return  signup(email,password,userName);
    }
};

module.exports = Vaild;


function signup(email,password,userName){
    if( isEmailValid(email) && isPasswordValid(password) && isUsernameValid(userName) ) {
        return true;
    }
    else {
        //console.log("Not vaild");
    }
}

function signin(email,password){
    if( isEmailValid(email) && isPasswordValid(password) ) {
        return true;
    }
    else {
       // console.log("Not vaild");
    }
};

function isEmailValid(email){
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        throw new Error("Enter a valid email");
    }
    else return true;
}

function isUsernameValid(name){
   if(!( name && name.length>5)){
     throw new Error("Please enter valid user name (min 6 characters)");
   }
   else {
       return true;
   }
}

function isPasswordValid(password){
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
        throw new Error("Password should have a minimum length of 6 characters and a mix of lowercase letters, uppercase letters digits, and special characters");
    }
    else return true;
}