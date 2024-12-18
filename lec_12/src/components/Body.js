// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import useRestaurant from "../utils/useRestaurant";
import RestaurantCard, { withRestaurantOffer } from "./RestaurantCard";

import { useState, useEffect } from "react";
import { ShimmerCard } from "./Shimmer"; // Import a new component for shimmer placeholders
import { Link } from "react-router-dom";
const Body = () => {
  //this time this is normal js variable we need to creat a state variable

  const [searchText, setSearchText] = useState("");
  //second type initialization of useState

  // const arr = useState(swigy);
  // const [restaurantList, setRestaurantList] = arr;
  //destucture the arra value an assign manually
  // restaurantList = arr[0];
  // setRestaurantList = arr[1];

  // When body render it render function of useEffect ---> as soon as after render the componet --> it call the callback function

  //SEARCH FUNCTION FOR SEARCHING A RESTUARANT
  const restaurant = useRestaurant();
  const restaurantList = restaurant[0];
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const OfferRestaurantCard = withRestaurantOffer(RestaurantCard);
  useEffect(() => {
    setFilteredRestaurants(restaurantList);
  }, [restaurantList]);
  const loading = restaurant[1];
  // setFilteredRestaurants(restaurantList);
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
  console.log(restaurantList);
  console.log(filteredRestaurants);
  return (
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
              <Link
                key={restaurant?.info?.id}
                to={"/restaurant/" + restaurant?.info?.id}
              >
                <OfferRestaurantCard {...restaurant?.info} />
              </Link>
            ))}
      </div>
    </div>
  );
};
export default Body;
