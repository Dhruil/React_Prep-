import {LOGO_URL} from "../utils/constant";
const Header = () => {
    return (
      <div className="header">
        <a href="/">
          <img
            className="logo"
            src={LOGO_URL}
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

  export default Header;