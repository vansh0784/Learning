import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallRestaurant } from "../Constants";
import Menu from "./Menu";
const LinkRestaurant = () => {
  const { id } = useParams(); // Extract ID from URL.
  const [menu, setMenu] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const data = await CallRestaurant(id); // Fetch restaurant details.
        console.log(data);
        const menudetail = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        setMenu(menudetail);
        const response = data?.data?.cards[2]?.card?.card?.info;
        setRestaurant(response);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };
    getDetail();
  }, [id]);

  if (!restaurant) return "Loading..."; // Show loading until restaurant data is fetched.
  console.log(menu);

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
                <li className="list" key={index}>{element}</li>
              ))}
            </ul>
            {/* <p id="descont">
              <p id="des1"></p>
              <p id="des2"></p>
              <p id="des3"></p>
            </p> */}
            <p className="deltime">Outlet
              <span id="outlet">{restaurant.areaName}</span>
            </p>
            <p className="deltime">{restaurant.sla.slaString}</p>
          </div>
        </h2>
        <hr className="hrline" />
        <div id="recommend">
          <p id="design">-ˋˏ ༻❁༺ ˎˊ-</p>
          <p id="menuhead">︵‿︵‿︵‿︵ MENU ︵‿︵‿︵‿︵</p>
          <hr className="hrline" />
          {menu ? <Menu menu={menu} /> : <h3>Yet to be disclosed</h3>}
        </div>
      </div>
    </>
  );
};
export default LinkRestaurant;