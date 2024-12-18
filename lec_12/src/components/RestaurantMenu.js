import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantMenuList";
import RestaurantTpes from "./RestaurantTypes";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const restaurantList = useRestaurantList(resId);
  const restaurant = restaurantList[0];
  const menuItemsTypes = restaurantList[1];
  const [showIndex, setShowIndex] = useState(0);
  return restaurant === null ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurant?.avgRating === "--"
                    ? { backgroundColor: "white", color: "black" }
                    : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">



        {menuItemsTypes.map((type, index) => (
          <div className="restaurant-type-title" key={index}>
            <div className=""></div>
            <RestaurantTpes {...type} isOpen={index == showIndex} ind={index} showInd={showIndex} setShow={() => setShowIndex(showIndex == index ? null : index)}></RestaurantTpes>
          </div>
        ))}
        {/* we trying to make a funcionality when one restaurant type is open then other are closed
            hence we need state variable in this file
            but we access it in RestaurantTpes file and modify the isOpen in Types file
            but we can't modify' the state variable in types file 
            hence we need to use pass functio of set hook to the props to modify the state in childern */}
      </div>
    </div>

  );
};
export default RestaurantMenu;
