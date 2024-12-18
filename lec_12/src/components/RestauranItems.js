import { useState } from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
const RestaurantItems = ({itemsCards}) => {


  const menuItemData = itemsCards.map((x) => x.card.info) || [];
  const dispatch = useDispatch();//it can't call inside the func hence we need to initialise and use it
 const handleAddItems = (item)=>{
    dispatch(addItem(item));
   }
 {/*
  dispatch(actionName(playload))
  import useDispatch & action = addItem

  react-redux creats
  {
  payload : "pizza";
  }
 */}
return(
  <div className="">
            {menuItemData.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{item?.name}</h3>
                  <p className="item-cost">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="item-desc">{item?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn" onClick={() =>handleAddItems(item)}> ADD +</button>
                </div>
              </div>
            ))}
          </div>
  
)
};

export default RestaurantItems;
