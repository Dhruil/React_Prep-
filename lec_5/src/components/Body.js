// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
import RestaurantCard from "./RestaurantCard";
import { swigy } from "../utils/restorlist";
import { useState } from "react";

const Body = () => {
  //this time this is normal js variable we need to creat a state variable
  const [restaurantList, setRestaurantList] = useState(swigy);

  //second type initialization of useState

  // const arr = useState(swigy);
  // const [restaurantList, setRestaurantList] = arr;
//destucture the arra value an assign manually
  // restaurantList = arr[0];
  // setRestaurantList = arr[1];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn"
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((data) => data?.info?.avgRating > 4.5)
            );
            // console.log(swigy.filter((data)=> data?.info?.avgRating))
          }}
        >
          Top Rated{" "}
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />//spread operator
          );
        })}
      </div>
    </div>
  );
};
export default Body;
