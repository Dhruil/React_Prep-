import { useState, useEffect } from "react";
import { swigy } from "../utils/constant";
const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);

  // When body render it render function of useEffect ---> as soon as after render the componet --> it call the callback function

  useEffect(() => {
    if (navigator.onLine) {
      fetchData();
      console.log("useEffect is called");
    }
  }, []);

  const fetchData = async () => {
    setLoading(true); //Set loading to true when fetch starts
    try {
      const data = await fetch(swigy);
      const json = await data.json();
      console.log(json);
      await setRestaurantList(
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
  return [restaurantList, loading];
};

export default useRestaurant;
