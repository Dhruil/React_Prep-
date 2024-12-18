import {CDN_URL} from "../utils/constant";

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
          <div className="card">
            <img src={ CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{area}</h4>
            <span>
              <h4>
                <i class="fa-solid fa-star"></i>
                {avgRating}
              </h4>
              <h4>{sla.lastMileTravelString}</h4>
              <h4>{isOpen ? <i class="fa-solid fa-store"></i>:<i class="fa-solid fa-shop-lock"></i>}</h4>
            </span>
          </div>
        );
  };

  export default RestaurantCard;