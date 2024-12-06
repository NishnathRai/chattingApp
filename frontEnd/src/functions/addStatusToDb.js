async function addStatusToDb(statusFile,getMyStatus,setLoder,setStatus){
    setLoder(true);
    try{
        const file = new FileReader();
        file.readAsDataURL(statusFile.files[0]);
        file.onload=async (val)=>{
           await sentToDb(val.target.result);
           await getMyStatus(setStatus,setLoder);
           setLoder(false);
        }
    }
    catch(err){
        console.log("faild to send status to db",err);
        setLoder(false);
    }
}

async function sentToDb(file) {
    let data ={
        StatusData :file,
        typeOfStatus : "image",
    };
    let send = await fetch(process.env.URL+"/addStatus",{
        method:'POST',
        credentials:"include",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
}



export default addStatusToDb;