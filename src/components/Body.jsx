import Card from "./RestaurantCardList";
import { useState, useEffect } from "react";
import { filterData, CallAPI } from "../Constants";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FcSearch } from "react-icons/fc";
import Offline from "./Offline";
import useOnline from "../utility/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API and update state
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const resp = await CallAPI();
        const restaurants =
          resp?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setAllRestaurant(restaurants || []); // Ensures it's never undefined
        setFilteredRest(restaurants || []);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false); // Always stop loading, even on error
      }
    };

    fetchRestaurants();
  }, []);
  const isOnline = useOnline();
  if (!isOnline) return <Offline />;
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
          id="btn1"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilteredRest(data);
          }}
        >
          <span id="btn" className="searchicon">
            <FcSearch/>
          </span>
        </button>
      </div>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="Card-container">
          {filteredRest?.length > 0 ? (
            filteredRest.map((rest) => {
              return (
                <Link id="cards" to={`/id/${rest.info.id}`} key={rest.info.id}>
                  <Card {...rest.info} />
                </Link>
              );
            })
          ) : (
            <Shimmer />
          )}
        </div>
      )}
    </>
  );
};

export default Body;
