import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function useproctedRout(){
    const navigate = useNavigate();
    useEffect(()=>{
        async function a(){
            try{
                let value = await fetch(process.env.URL+"/isValid",{credentials:"include"});
                if(value.status!=200){
                     navigate('login');
                 }
            }
            catch(err){
                console.log("error from protected route",err);
                navigate('login');
            }
        }
        a();
    },[]);
}
export default useproctedRout;