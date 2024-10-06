import Card from "./RestaurantCardList";
// import { restaurantList } from "../Constants";
import { useState,useEffect } from "react";
import { filterData,CallAPI } from "../Constants";
const Body=()=>{
    const [searchText,setSearchText]=useState("");
    const [search,setSearch]=useState([]);
    useEffect(()=>{
                const ans= CallAPI();
                const restaurant =ans?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setSearch(restaurant);
                console.log(search);
    },[]);

    return(

        <>
            <div className="Search-Box">
                <input spellCheck="false" type="text" placeholder="Enter Search" id="Search-bar" value={searchText} onChange={(e)=>
                    setSearchText(e.target.value)
                }/>
                <button onClick={()=>{
                    const data=filterData(searchText,search);
                    if(!data.ok) setSearch(data);
                    else setSearch(search);

                }}><i className="fa fa-search" id="btn"></i></button>
            </div>
            <div className="Card-container">
                {
                    search.map((rest)=>{
                        return <Card {...rest.info} key={rest.info.id}/>
                    })
                }
            </div>
        </>

    )
}
export default Body;