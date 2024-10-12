import Card from "./RestaurantCardList";
import { useState, useEffect } from "react";
import { filterData, CallAPI } from "../Constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [loading, setLoading]=useState(true);

  // Fetch data from API and update state
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const resp = await CallAPI();
        const restaurants = resp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurant(restaurants);
        setFilteredRest(restaurants);
        setLoading(false);
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
        <button id="btn1"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilteredRest(data)

          }}
        >
          <i className="fa fa-search" id="btn"></i>
        </button>
      </div>
      {loading ? <Shimmer/> : (
              <div className="Card-container">
              {filteredRest.map((rest) => {
                return <Link id="cards" to={`/id/${rest.info.id}`}key={rest.info.id}><Card {...rest.info}/></Link>;
              })}
            </div>
      )}

    </>
  );
};

export default Body;
