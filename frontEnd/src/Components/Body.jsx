import { useSelector } from "react-redux";
import SettingsPage from "./SettingsPage";
import SearchPage from "./SearchPage";
import ChatPage from "./ChatPage";
import ErrorPage from "./ErrorPage";
import StatusPage from "./StatusPage";

function Body(){

    let page = useSelector(store=>store.page);
    function getPage(page){
        if(page==0) return <ChatPage/> ;
        else if(page==1) return <StatusPage/>;
        else if(page==3) return <SearchPage/> ;
        else if(page==4) return <SettingsPage/> ;
        return <ErrorPage/> ;
    }


    return (<>
    {getPage(page)}
    </>)
}

export default Body ;