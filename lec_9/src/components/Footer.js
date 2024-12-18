// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <a href="https://www.linkedin.com/in/dhruil_parmar/" target="_blank">
          Dhruil Parmar
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