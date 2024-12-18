import { CDN_URL } from "../utils/constant";
/* src/index.css */

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  sla,
  isOpen,
  avgRating,
}) => {
  return (
    <div className="restaurantcard ">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <i class="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{sla.lastMileTravelString}</h4>
        <h4>
          {isOpen ? (
            <i class="fa-solid fa-store"></i>
          ) : (
            <i class="fa-solid fa-shop-lock"></i>
          )}
        </h4>
      </span>
    </div>
  );
};

//we are bulit the functionality of restaurant card has it's offer we can see on the image of restaurant and we can create this using
//higer order function => It's take a component as Input and Enhance it's and return an enhanced version of component;
export const withRestaurantOffer = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="cardHovering">
        <div className=" offer">
          <span className="offer-header ">
            {props?.aggregatedDiscountInfoV3?.header}
          </span>
          <span>{props?.aggregatedDiscountInfoV3?.subHeader}</span>
        </div>
        <RestaurantCard {...props} />
        </div>
      </>
    );
  };
};
export default RestaurantCard;
