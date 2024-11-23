import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function useproctedRout(){
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        async function a(){
            console.log(location.pathname=='/Login',location.pathname);
            try{
                let value = await fetch(process.env.URL+"/isValid",{credentials:"include"});
                if(value.status!=200){
                    if(location.pathname!="/Login") navigate('Login');
                }
                else{
                    if(location.pathname=="/Login") navigate("/");
                }
            }
            catch(err){
                console.log("error from protected route",err);
                if(location.pathname!="/Login") navigate('Login');
            }
        }
        a();
    },[]);
}
export default useproctedRout;