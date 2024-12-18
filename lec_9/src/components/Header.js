import { useState } from "react";
import LOGO_URL from "../utils/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src={LOGO_URL} alt="Food Fire Logo" />
      </a>

      <div className="nav-items">
        <ul>
          <li >
            <Link to="/"style ={{color:"white"}}>Home</Link>
          </li>
          <li>
            <Link to="about"style ={{color:"white"}}>About</Link>
          </li>
          <li>
            <Link to="contactus"style ={{color:"white"}}>Contact</Link>
          </li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
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
