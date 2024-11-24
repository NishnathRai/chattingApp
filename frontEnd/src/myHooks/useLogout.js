import { useNavigate } from "react-router-dom";

async function useLogout(){
    let a = await fetch(process.env.URL+"/logout",{credentials:"include"});
    const navigate = useNavigate();
    navigate("/");
};

export default useLogout;