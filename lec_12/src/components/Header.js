import { useState, useContext } from "react";
import LOGO_URL from "../utils/images/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState(true);
  //aceesing the context data using the useContext Hook     
  const userInfo = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);//what portions of store we need and subsribing to store 
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={LOGO_URL} alt="Food Fire Logo" />
      </a>

      <div className="nav-items">
        <ul>
          <li >
            <Link to="/" style={{ color: "white" }}>Home</Link>
          </li>
          <li>
            <Link to="about" style={{ color: "white" }}>About</Link>
          </li>
          <li>
            <Link to="contactus" style={{ color: "white" }}>Contact</Link>
          </li>
          <li>
            <Link to="cart" style={{ color: "white" }}><i class="fa-solid fa-cart-shopping"></i></Link>
          </li>
          <li>
            {cartItems.length}
          </li>
          <li
            onClick={() => {
              setLogin(!login);
              console.log("btn");
            }}
          >
            {login ? (
              <i class="fa-duotone fa-solid fa-right-to-bracket"></i>
            ) : (
              <i class="fa-duotone fa-solid fa-right-from-bracket"></i>
            )}
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
