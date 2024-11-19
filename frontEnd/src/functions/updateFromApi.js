require("dotenv").config();

let options =
{
    method : 'PUT',
    headers:{
        'Content-Type': 'application/json'
    },
    credentials: 'include',
}

async function updateFromApi(email,userName,bio,status,profilePicture,setMessage){
    let obj = {
      userName,
      email,
      bio,
      status,
      profilePicture  
    };
    options.body = JSON.stringify(obj);
    try {
        let a = await fetch(process.env.URL+"/userUpdate",options);
        a = await a.json();
        setMessage(a.message);
    }
    catch(err){
        setMessage("Some thing went wrong see console for more info");
        console.log( "error in updating user data" , err.message)
    }
}

export default updateFromApi;