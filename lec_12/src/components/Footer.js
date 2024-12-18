// Footer component for footer section
import { useContext } from "react";
import UserContext from "../utils/UserContext";
useContext
const Footer = () => {
    const {user,setUserName} = useContext(UserContext);
    setUserName(" Dhruil Parmar")
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By  
        <a href="https://www.linkedin.com/in/dhruil_parmar/" target="_blank">
         {user}
        </a>
        <i class="fa-solid fa-copyright"></i>
        {year}
        <strong>
        <span> MealWala</span>
        </strong>
      </div>
    );
  };
  export default Footer;