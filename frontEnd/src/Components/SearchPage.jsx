import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import UserCard from "./UserCard";
import { useSelector } from 'react-redux';
import Loder from "./Loder";

const SearchIcon = <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>

function SearchPage(){

    let [ searchValue , setsearchValue ] = useState("");
    let [ feed , setFeed ] = useState([]);
    let mode = useSelector(store=>store.mode);
    let infiniteLoder = useRef(null);

    async function getFeed(length,searchV,w) {
        try{
          let feedData = await fetch( `${process.env.URL}/feed/${length}/S${ searchV }` , {credentials:"include"});
          feedData = await feedData.json();
          if(!w)setFeed([...feed,...feedData]);
          else setFeed(feedData);
          if(feedData.length<10){
            infiniteLoder.current.style.display="none";
          }
          else infiniteLoder.current.style.display="flex";
        }
        catch(err){console.log( err.message , " err at feed fetching " )} ;
    };
    useEffect(()=>{getFeed(0,searchValue,1)},[searchValue]);
    useEffect(()=>{
        function callback(entries){
           entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    getFeed(feed.length,searchValue);
                }
           })
        }
       let observer = new IntersectionObserver(callback,{ threshold: 1  });
       if(infiniteLoder.current) { observer.observe(infiniteLoder.current); }
       return ()=>{ 
        if(infiniteLoder.current){
           observer.unobserve(infiniteLoder.current);
        }
       }
    },[feed]);
    

    return (<>
    <div style={{backgroundColor: mode ? "white" : "rgb(45, 45, 45)"}} className="search-page-box" >
        <div className="search-bar" >
          <Input  setValue={setsearchValue} svg={SearchIcon} placeHolder={"Search with User Name"} />
        </div>
        { feed.map( (val,i)=>{
            return  <UserCard key={i+216} _id={val?._id} /> ;
        } ) }
        <div ref={infiniteLoder} className="infilite-scrole" >
            <Loder/>
        </div>
    </div>
    </>)
}

  

export default SearchPage;