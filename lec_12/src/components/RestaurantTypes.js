import React, { forwardRef, useRef, useEffect } from "react";
import RestaurantItems from "./RestauranItems";

const RestaurantTypes = forwardRef(({ title, itemCards, isOpen, setShow }, ref) => {

  const sectionRef = useRef(null);
  console.log(sectionRef);
  // Scroll items to the top whenever isOpen changes to true
  useEffect(() => {
    if (isOpen && sectionRef.current) {
      const topOffset = sectionRef.current.getBoundingClientRect().top + window.pageYOffset -250; // Adjust by header height
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, [isOpen]);
  const toggleAccordion = () => {

    setShow();

  };

  return (
    <div className="restaurant-type">
      <h2 className="restaurant-type-title" onClick={toggleAccordion}>
        {title} ({itemCards.length})
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "▲" : "▼"}
        </span>
      </h2>
      {isOpen && (
        <div className="restaurant-type-content" ref={sectionRef}>
          <RestaurantItems itemsCards={itemCards} />
        </div>
      )}
    </div>
  );
});

export default RestaurantTypes;
