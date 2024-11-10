import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallRestaurant } from "../Constants";
import { img_Url } from "../Constants";

const LinkRestaurant = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const data = await CallRestaurant(id);
        const response = data?.data?.cards[2]?.card?.card?.info;
        setRestaurant(response);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };
    getDetail();
  }, [id]);

  if (!restaurant) return "Loading...";

  return (
    <>
      <h1 id="abc">{restaurant.name}</h1>
      <div id="item-contains">
        <h2 id="detail-box">
          <span id="rating">
            <span className="material-symbols-outlined">⚝</span>
          </span>{" "}
          {restaurant.avgRatingString} {restaurant.totalRatingsString}
          <div>
          <ul id="cuisines">
            {restaurant.cuisines.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        </h2>

        {/* <img id="itemimg" src={img_Url + restaurant.cloudinaryImageId} alt="Restaurant" /> */}
      </div>
    </>
  );
};

export default LinkRestaurant;
