import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function useproctedRout(){
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        async function a(){
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
                if(location.pathname!="/Login") navigate('Login');
            }
        }
        a();
    },[]);
}
export default useproctedRout;