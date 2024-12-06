async function getUsersKeptStatus(setData,setLoder){
    setLoder(true);
    try{
        let data = await fetch(process.env.URL+"/getStatus",{credentials:"include"});
        data = await data.json();
        setData(data.data);
    }
    catch(err){
        console.log(err,"error while fetching status");
    }
    setLoder(false);
}
export default getUsersKeptStatus;
