import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallRestaurant } from "../Constants";
import { img_Url } from "../Constants";
const LinkRestaurant=()=>{
    const {id}=useParams();
    const [menu,setMenu]=useState(null);
    const [restaurant,setRestaurant]=useState(null);
    console.log(id);
    useEffect(() => {
        const getDetail=async()=>{
            try {
                const data = await CallRestaurant(id);
                const response = data?.data?.cards[2]?.card?.card?.info;
                setRestaurant(response);
                const takes=data?.
                console.log(response);
              } catch (error) {
                console.error("Error fetching restaurant details:", error);
              }
            };
            getDetail();
          }, [id]);
    return(
        <>
            <div id="item-contains">
                <div className="Rest-Card">
                    <img src={img_Url+restaurant?.cloudinaryImageId} alt="Item Image" />
                    <h1>{restaurant?.name}</h1>
                    <h3>Price: {restaurant?.costForTwoMessage}</h3>
                    <h4>Rating: {restaurant?.avgRating}⭐</h4>
                    <input type="button" value="ADD" id="add-item"/>
                </div>
                <div id="menu-list">
                    <h2>Menu-Items</h2>
                </div>
            </div>
        </>
    )
}
export default LinkRestaurant;