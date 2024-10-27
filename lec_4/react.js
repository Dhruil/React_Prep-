import React from "react";
import ReactDOM from "react-dom/client";
import { swigy } from "./restorlist";
const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/4381590/file/original-29fdc11479bd993aea722002175370a8.jpg?resize=1200x900"
          alt="Food Fire Logo"
        />
      </a>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li><i class="fa-solid fa-cart-shopping"></i></li>
          
        </ul>
      </div>
    </div>
  );
};
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
          <img src={  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
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

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
ARRAY ...METHOD?
const Body = () => {
  return (
    <div className="restaurant-list">
      {swigy.map((restaurant) => {
        return <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />;
      })}
    </div>
  );
};

// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <a href="https://www.linkedin.com/in/chetannada/" target="_blank">
        Chetan Nada
      </a>
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);
