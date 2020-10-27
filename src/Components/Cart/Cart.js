import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div className="cart p-4">
            <h1>Cart</h1>
            <h5>You have ordered :  Products</h5>
            <p>Price : </p>
            <p>Shipping Cost : </p>
            <p>Tax + VAT (5%) :</p>
            <p>Total Price :</p>
        </div>
    );
};

export default Cart;