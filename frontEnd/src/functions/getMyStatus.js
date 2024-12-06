async function getMyStatus(setStatus,setLoder) {
    setLoder(true);
    try{
        let data = await fetch(process.env.URL+"/getMyStatuc",{credentials:"include"});
        data = await data.json();
        setStatus(data?.found);
    }
    catch(err){
        console.log(err,"error while fetching my status");
    }
    setLoder(false);
}

export default getMyStatus;