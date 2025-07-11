import { useEffect, useState } from "react";
import {
  RESTO_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constant";
const useRestaurantList = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuTypes, setMenuTypes] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    try {
      const data = await fetch(`https://meal-wala.vercel.app/api/restaurant/${resId}`);

      const restaurantMenu = await data.json();
      console.log(restaurantMenu.json);
      const restaurantData =
        restaurantMenu?.json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);
      console.log(restaurantData);
      // Set menu item data
      const menuTypesData =
        restaurantMenu?.json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY) || [];
      setMenuTypes(menuTypesData);
    } catch (error) {
      setMenuTypes([]);
      setRestaurant(null);
      console.log(error);
    }
  };
  return [restaurant, menuTypes];
};

export default useRestaurantList;
