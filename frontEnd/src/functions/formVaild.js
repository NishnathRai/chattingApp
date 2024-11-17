import postCall from "./postCall";
let URL = "http://localhost:3000";

async function formVaild(index,email,password,userName,remember,setMsg){
    try{
        if(index==0 && signin(index,email,password,userName,remember,setMsg) ) {
            let result = await postCall(URL+"/signin",{ email , password , remember });
            setMsg(result.message);
        }
        else if( signup(index,email,password,userName,remember,setMsg)){
            let result = await postCall(URL+"/signup",{ email , password , remember , userName });
            setMsg(result.message);
        }
    }
    catch(err){
        console.log(err);
        setMsg("some thing went wrong while tring to connnect with back-end (see console for more info)");
    }
};

export default formVaild;


function signup(index,email,password,userName,remember,setMsg){
    if( isEmailValid(email,setMsg) && isPasswordValid(password,setMsg) && isUsernameValid(userName,setMsg) ) {
        setMsg("");
        return true;
    }
    else {
        return false;
    }
}

function signin(index,email,password,userName,remember,setMsg){
    if( isEmailValid(email,setMsg) && isPasswordValid(password,setMsg) ) {
        setMsg("");
        return true;
    }
    else {
        return false;
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
        setMsg("a minimum length of 6 characters and a mix of lowercase letters, uppercase letters , digits, and special characters");
        return false;
    }
    else return true;
}