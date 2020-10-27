import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';
import fakeData from '../../fakeData';
import './ReviewCart.css'
const ReviewCart = () => {
    if(localStorage.getItem("firebase:host:cse-498-r.firebaseio.com"))
    {
        localStorage.removeItem("firebase:host:cse-498-r.firebaseio.com");
    }
    const [cart, setCart] = useState();
    
    useEffect(() => {
        const cartList = [];
        
        for (let [key, value] of Object.entries(localStorage)) {
            //console.log(value);
            cartList.push(value);
            //setCart(value);
            //console.log(cart);
        }
        setCart(cartList);

    },[]);
  
    return (
        <div className = "mainPage-container reviewCart">
            <div className="course-container mr-auto ml-auto">
                { cart && cart.map(pd => <CartProduct product={pd}></CartProduct>)}
                
            </div>

            <div className = "cart-container w-25 mr-auto ml-auto mt-3">
                <Cart></Cart>
            </div>
            
        </div>
    );
};

export default ReviewCart;