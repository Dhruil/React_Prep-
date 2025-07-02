// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { CDN_URL } from "../utils/constant";
// import { clearCart } from '../redux/cartSlice';

// const Cart = () => {
//     const [quantity, setQuantity] = useState(1);
//     const cartItems = useSelector((store) => store.cart.items);
//     //subscribe right portion of store not subscribe whole store
//     const increaseQuantity = () => setQuantity(quantity + 1);
//     const decreaseQuantity = () => {
//         if (quantity > 1) setQuantity(quantity - 1);
//     };

//     // const cartItem = {
//     //     title: "SuperCoat Chicken Adult All Breed Dog Dry Food",
//     //     price: 769,
//     //     image: "https://via.placeholder.com/100", // Replace with the image URL
//     // };
//     const dispatch = useDispatch();
//     const handleClearCart=()=>{
//         dispatch(clearCart());
//     }
//     return (
//         <div style={styles.cartContainer}>
//             {cartItems.map((item) => (<div key={item?.id}>
//                 {
//                     console.log(cartItems)
//                 }
//                <div style={styles.cartItem}>
//                 <img src={CDN_URL + item?.imageId}
//                       alt={item?.name} style={styles.itemImage} />
//                 <div style={styles.itemDetails}>
//                     <h3 style={styles.itemTitle}>{item?.name}</h3>
//                     <p style={styles.itemDescription}>{item?.description}</p>
//                 </div>
//                 <div style={styles.itemQuantity}>
//                     <button onClick={decreaseQuantity} style={styles.quantityButton}>-</button>
//                     <span style={styles.quantityDisplay}>{quantity}</span>
//                     <button onClick={increaseQuantity} style={styles.quantityButton}>+</button>
//                 </div>
//                 <p style={styles.itemPrice}>
//                 {item?.price > 0
//                       ? new Intl.NumberFormat("en-IN", {
//                           style: "currency",
//                           currency: "INR",
//                         }).format(item?.price / 100)
//                       : " "}
//                 </p>
//                 <button style={styles.deleteButton}>🗑️</button>
//             </div>
//             <div style={styles.summary}>
//                 <h3 style={styles.summaryTitle}>Summary</h3>
//                 <p style={styles.totalLabel}>
//                     TOTAL PRICE <span>₹{((item?.price) / 100 ) * quantity}</span>
//                 </p>
//                 <button style={styles.checkoutButton}>CHECKOUT</button>
//             </div>
//             <button style={styles.backButton} onClick={handleClearCart}>← Back to shop</button>      
//             </div>))}
           
//         </div>
//     );
// };

// const styles = {
//     cartContainer: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         padding: '20px',
//         backgroundColor: '#f4f4f4',
        
//     },
//     cartItem: {
//         display: 'flex',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '8px',
//         width: '65%',
//         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//         marginTop:'100px',
//         marginBottom: '20px',
//     },
//     itemImage: {
//         width: '100px',
//         height: '100px',
//         objectFit: 'cover',
//         marginRight: '20px',
//     },
//     itemDetails: {
//         flex: '1',
//     },
//     itemTitle: {
//         fontSize: '18px',
//         margin: '0 0 5px 0',
//         color: '#333',
//     },
//     itemDescription: {
//         fontSize: '14px',
//         color: '#666',
//         margin: '0',
//     },
//     itemQuantity: {
//         display: 'flex',
//         alignItems: 'center',
//         marginRight: '20px',
//     },
//     quantityButton: {
//         fontSize: '16px',
//         padding: '0 10px',
//         cursor: 'pointer',
//         border: '1px solid #ddd',
//         backgroundColor: '#fff',
//     },
//     quantityDisplay: {
//         margin: '0 10px',
//         fontSize: '16px',
//     },
//     itemPrice: {
//         fontSize: '16px',
//         fontWeight: 'bold',
//         marginRight: '20px',
//     },
//     deleteButton: {
//         cursor: 'pointer',
//         backgroundColor: 'transparent',
//         border: 'none',
//         fontSize: '18px',
//     },
//     summary: {
//         width: '30%',
//         backgroundColor: '#ececec',
//         borderRadius: '8px',
//         padding: '20px',
//         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//     },
//     summaryTitle: {
//         fontSize: '20px',
//         marginBottom: '20px',
//         color: '#333',
//     },
//     totalLabel: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         fontSize: '16px',
//         fontWeight: 'bold',
//         color: '#333',
//         marginBottom: '20px',
//     },
//     checkoutButton: {
//         backgroundColor: '#333',
//         color: '#fff',
//         padding: '10px',
//         width: '100%',
//         borderRadius: '8px',
//         border: 'none',
//         cursor: 'pointer',
//         fontSize: '16px',
//     },
//     backButton: {
//         display: 'flex',
//         alignItems: 'center',
//         color: '#333',
//         textDecoration: 'none',
//         fontSize: '16px',
//         cursor: 'pointer',
//         border: 'none',
//         backgroundColor: 'transparent',
//         marginTop: '20px',
//     },
// };

// export default Cart;

import React, { useState } from "react";
import { clearCart } from '../redux/cartSlice';
import { removeItem } from "../redux/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

export default function Cart() {
  const dispatch = useDispatch(); 
  const initialCartItems = useSelector((store) => store.cart.items);
  console.log(initialCartItems)
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [quantities, setQuantities] = useState(
    initialCartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const updateQuantity = (itemId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, prev[itemId] + change),
    }));
  };

  const handleRemoveItem = (itemId) => {
      setCartItems((prev) => prev.filter((item) => item.id !== itemId));
      setQuantities((prev) => {
          const newQuantities = { ...prev };
          delete newQuantities[itemId];
          return newQuantities;
        });
        dispatch(removeItem(itemId))
  };

  const handleClearCart = () => {
    setCartItems([]);
    setQuantities({});
    dispatch(clearCart());
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price / 100);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * quantities[item.id], 0);

  const calculateItemTotal = (price, quantity) => price * quantity;

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "50px" , marginTop: "5rem"}}>
        <h2 style={{ fontSize: "24px" }}>Your cart is empty 🛒</h2>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "orange",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          <a href="/">Continue Shopping</a>
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #eee",
          paddingBottom: "10px",
          marginTop: "5rem",
          
        }}
      >
        <div>
          <h1>Your Cart</h1>
          <p>{cartItems.length} item(s)</p>
        </div>
        <button
          onClick={handleClearCart}
          style={{
            backgroundColor: "transparent",
            color: "red",
            border: "1px solid red",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Clear Cart
        </button>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Cart Items */}
        <div style={{ flex: "2" }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                border: "1px solid #ddd",
                marginBottom: "15px",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <img
                src={CDN_URL + item.imageId}
                alt={item.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  marginRight: "15px",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 5px" }}>{item.name}</h3>
                <p style={{ margin: "0 0 5px", fontSize: "14px", color: "#555" }}>
                  {item.description}
                </p>
                {item.ratings?.aggregatedRating?.rating && (
                  <div style={{ fontSize: "14px", color: "#4caf50" }}>
                    ⭐ {item.ratings.aggregatedRating.rating}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={quantities[item.id] <= 1}
                      style={{ padding: "5px 10px", cursor: "pointer" }}
                    >
                      -
                    </button>
                    <span>{quantities[item.id]}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      style={{ padding: "5px 10px", cursor: "pointer" }}
                    >
                      +
                    </button>
                  </div>
                  <div>{formatPrice(item.price)}</div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "red",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div
          style={{
            flex: "1",
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
            minWidth: "250px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Order Summary</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", justifyContent: "space-between", margin: "8px 0" }}
            >
              <span>
                {item.name.slice(0, 20)} × {quantities[item.id]}
              </span>
              <span>{formatPrice(calculateItemTotal(item.price, quantities[item.id]))}</span>
            </div>
          ))}
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
            <strong>Subtotal</strong>
            <span>{formatPrice(calculateTotal())}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Tax (5%)</strong>
            <span>{formatPrice(calculateTotal() * 0.05)}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            <strong>Total</strong>
            <span>{formatPrice(calculateTotal() * 1.05)}</span>
          </div>
          <button
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "orange",
              border: "none",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
