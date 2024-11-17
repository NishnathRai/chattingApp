function formVaild(index,email,password,userName,remember,setMsg){
    console.log(index,email,password,userName,remember);
    if(index==0) {
        signin(index,email,password,userName,remember,setMsg);
    }
    else{
        signup(index,email,password,userName,remember,setMsg);
    }
};

export default formVaild;


function signup(index,email,password,userName,remember,setMsg){
    if( isEmailValid(email,setMsg) && isPasswordValid(password,setMsg) && isUsernameValid(userName,setMsg) ) {
        setMsg("");
    }
    else {
        console.log("Not vaild");
    }
}

function signin(index,email,password,userName,remember,setMsg){
    if( isEmailValid(email,setMsg) && isPasswordValid(password,setMsg) ) {
        setMsg("");
    }
    else {
        console.log("Not vaild");
    }
};

function isEmailValid(email,setMsg){
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
         setMsg("Enter a valid email");
         return false;
    }
    else return true;
}

function isUsernameValid(name,setMsg){
   if(!(name.length>5)){
      setMsg("Please enter valid user name (min 6 characters)");
      return false;
   }
   else {
       return true;
   }
}

function isPasswordValid(password,setMsg){
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
        setMsg("a minimum length of 6 characters and a mix of lowercase letters, uppercase letters digits, and special characters");
        return false;
    }
    else return true;
}