import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallRestaurant } from "../Constants";
const LinkRestaurant=()=>{
    const {id}=useParams();
    const [restaurant,setRestaurant]=useState(null);
    useEffect(() => {
        const getDetail=async()=>{
            const data=await CallRestaurant(id);
            const response=data?.data;
        }
        getDetail();
    }, [])

    return(
        <>
            <div className="LinkRes"></div>
        </>
    )
}
export default LinkRestaurant;