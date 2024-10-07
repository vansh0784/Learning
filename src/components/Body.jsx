import Card from "./RestaurantCardList";
import { useState, useEffect } from "react";
import { filterData, CallAPI } from "../Constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  // Fetch data from API and update state
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const resp = await CallAPI();
        const restaurants = resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurant(restaurants);
        setFilteredRest(restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);
  return (
    <>
      <div className="Search-Box">
        <input
          spellCheck="false"
          type="text"
          placeholder="Enter Search"
          id="Search-bar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            data?setFilteredRest(data):setFilteredRest(allRestaurant);

          }}
        >
          <i className="fa fa-search" id="btn"></i>
        </button>
      </div>

      <div className="Card-container">
        {filteredRest.map((rest) => {
          return <Card {...rest.info} key={rest.info.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
