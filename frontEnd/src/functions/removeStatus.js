import getMyStatus from "./getMyStatus";

async function removeStatus(setStatus,setLoder){
    setLoder(true);
    try{
        let a = await fetch(process.env.URL+"/removeMyStatus",{
            credentials:"include",
            method:"DELETE"
        });
    }
    catch(err){
        console.log(err,"cannot remove status from db")
    }
    setLoder(false);
    getMyStatus(setStatus,setLoder);
}

export default removeStatus;