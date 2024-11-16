import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallRestaurant } from "../Constants";
import Menu from "./Menu";
const LinkRestaurant = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const data = await CallRestaurant(id);
        // console.log(data);
        const menudetail=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards||[];
        setMenu(menudetail);
        // console.log(menudetail);
        // console.log(menudetail.length);
        const response = data?.data?.cards[2]?.card?.card?.info;
        setRestaurant(response);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };
    getDetail();
  }, [id]);
  console.log(menu);

  if (!restaurant) return "Loading...";
  return (
    <>
      <h1 id="abc">{restaurant.name}</h1>
      <div id="item-contains">

        <h2 id="detail-box">
          <span id="rating">
            <span className="material-symbols-outlined">⁎</span>
          </span>{" "}
          {restaurant.avgRatingString} {restaurant.totalRatingsString}
          <span id="circle">•</span>
          {restaurant.costForTwoMessage}
          <div>
            <ul id="cuisines">
              {restaurant.cuisines.map((element, index) => (
                <li class="list" key={index}>
                  {element}
                </li>
              ))}
            </ul>
            <p className="deltime">Outlet
               <span id="outlet">{restaurant.areaName}</span></p>
            <p className="deltime">{restaurant.sla.slaString}</p>
          </div>
        </h2>
        <hr className="hrline" />
        <div id="recommend">
            Recommend
            {menu?<Menu menu={menu}/>:<h3>Yet to be disclosed</h3>}

        </div>

        {/* <img id="itemimg" src={img_Url + restaurant.cloudinaryImageId} alt="Restaurant" /> */}
      </div>
    </>
  );
};

export default LinkRestaurant;
