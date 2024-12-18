import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CDN_URL } from "../utils/constant";
import { clearCart } from '../redux/cartSlice';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const cartItems = useSelector((store) => store.cart.items);
    //subscribe right portion of store not subscribe whole store
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    // const cartItem = {
    //     title: "SuperCoat Chicken Adult All Breed Dog Dry Food",
    //     price: 769,
    //     image: "https://via.placeholder.com/100", // Replace with the image URL
    // };
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <div style={styles.cartContainer}>
            {cartItems.map((item) => (<div key={item?.id}>
               <div style={styles.cartItem}>
                <img src={CDN_URL + item?.imageId}
                      alt={item?.name} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                    <h3 style={styles.itemTitle}>{item?.name}</h3>
                    <p style={styles.itemDescription}>{item?.description}</p>
                </div>
                <div style={styles.itemQuantity}>
                    <button onClick={decreaseQuantity} style={styles.quantityButton}>-</button>
                    <span style={styles.quantityDisplay}>{quantity}</span>
                    <button onClick={increaseQuantity} style={styles.quantityButton}>+</button>
                </div>
                <p style={styles.itemPrice}>
                {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                </p>
                <button style={styles.deleteButton}>🗑️</button>
            </div>
            <div style={styles.summary}>
                <h3 style={styles.summaryTitle}>Summary</h3>
                <p style={styles.totalLabel}>
                    TOTAL PRICE <span>₹{item?.price * quantity}</span>
                </p>
                <button style={styles.checkoutButton}>CHECKOUT</button>
            </div>
            <button style={styles.backButton} onClick={handleClearCart}>← Back to shop</button>      
            </div>))}
           
        </div>
    );
};

const styles = {
    cartContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        
    },
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '65%',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        marginTop:'100px',
        marginBottom: '20px',
    },
    itemImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginRight: '20px',
    },
    itemDetails: {
        flex: '1',
    },
    itemTitle: {
        fontSize: '18px',
        margin: '0 0 5px 0',
        color: '#333',
    },
    itemDescription: {
        fontSize: '14px',
        color: '#666',
        margin: '0',
    },
    itemQuantity: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px',
    },
    quantityButton: {
        fontSize: '16px',
        padding: '0 10px',
        cursor: 'pointer',
        border: '1px solid #ddd',
        backgroundColor: '#fff',
    },
    quantityDisplay: {
        margin: '0 10px',
        fontSize: '16px',
    },
    itemPrice: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginRight: '20px',
    },
    deleteButton: {
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '18px',
    },
    summary: {
        width: '30%',
        backgroundColor: '#ececec',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    },
    summaryTitle: {
        fontSize: '20px',
        marginBottom: '20px',
        color: '#333',
    },
    totalLabel: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    checkoutButton: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        width: '100%',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
    backButton: {
        display: 'flex',
        alignItems: 'center',
        color: '#333',
        textDecoration: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent',
        marginTop: '20px',
    },
};

export default Cart;
