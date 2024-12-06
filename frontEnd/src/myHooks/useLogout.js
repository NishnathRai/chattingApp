

async function useLogout(navigate){
    let a = await fetch(process.env.URL+"/logout",{credentials:"include"});
    navigate("/Login"); 
};

export default useLogout;