// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import RestaurantCard from "./RestaurantCard";
import { swigy } from "../utils/restorlist";
import { useState, useEffect } from "react";
import {ShimmerCard} from "./Shimmer"; // Import a new component for shimmer placeholders
import { connected } from "process";
import { Offline } from "./Offline";
import {Link} from "react-router-dom";
const Body = () => {
  //this time this is normal js variable we need to creat a state variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  //second type initialization of useState

  // const arr = useState(swigy);
  // const [restaurantList, setRestaurantList] = arr;
  //destucture the arra value an assign manually
  // restaurantList = arr[0];
  // setRestaurantList = arr[1];

  // When body render it render function of useEffect ---> as soon as after render the componet --> it call the callback function
  const [status, setStatus] = useState("Online");
  useEffect(() => {
    if (!navigator.onLine) {
      setStatus("Offline");
    } else {
      fetchData();
      console.log("useEffect is called");
    }
  }, []);

  const fetchData = async () => {
    setLoading(true); //Set loading to true when fetch starts
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      await setRestaurantList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching Restuarants", error);
    }

    setLoading(false); // Set loading to false when data fetch is complete
    console.log(
      "It Render fisrt then the UseEffect is Called Because It is in the body Component and It render with The body Component"
    );
  };

  //SEARCH FUNCTION FOR SEARCHING A RESTUARANT
  const handleSearch = () => {
    setFilteredRestaurants(
      restaurantList.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  // TRY TO MAKE ENTER KEY SEARCH FUNCTIONALITY
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleFilter = () => {
    setFilteredRestaurants(
      restaurantList.filter((data) => data?.info?.avgRating >= 4.5)
    );
  };
  // Inline styles for the component
  
  return status === "Offline" ? <Offline></Offline>: (
    <div className="body">
      <div className="filter">
        <button className="btn" onClick={handleFilter}>
          Top Rated{" "}
        </button>
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          value={searchText}
          onKeyUp={handleKeyPress}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        
        <button className="btn" onClick={handleSearch}>
        <i class="fa-duotone fa-solid fa-magnifying-glass"></i>
       
        </button>
      </div>
      <div className="restaurant-list">
        {loading
          ? Array(15)
              .fill()
              .map((_, index) => <ShimmerCard key={index} />) // Render shimmer placeholders
          : filteredRestaurants.map((restaurant) => (
            // whih is fisrt after map it need key
            <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}> 
           
              <RestaurantCard
                
                {...restaurant?.info}
              />
              </Link>
            ))}
      </div>
    </div>
  );
};
export default Body;
