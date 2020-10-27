import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../util/firebase';
import './HomeCategories.css'
const HomeCategories = (props) => {
    
    const product = props.product;
    const {Id, Name, Price, Image, Categories} = product;
    let value = sessionStorage.getItem("count");
    console.log(value);
    let [count, setCount] = useState(value);
    
    const handleCart = () =>
    {
        var length = count;
        length ++;
        localStorage.setItem(`product${count}/${Id}`, Id);
        setCount(length);
        if(value<length)
        {
            sessionStorage.setItem("count",length);
        }
        var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var milliseconds = date.getMilliseconds();
      var time = hours+": "+minutes+": "+seconds+": "+milliseconds;
      var user = sessionStorage.getItem("userName");
      var product_category = Categories;
      var product_name = Name;
      var product_id = Id;
      
      const mouseClickRef = firebase.database().ref('NewProductMouseClickAddToCart').child(user);
      const mouseClick = {
          product_id,
          product_category,
          product_name,
          time
      };
      mouseClickRef.push(mouseClick);
        
    }

    const mouseOverHandle = function(e) {
        
        var date = new Date();
        var x_position = e.screenX;
        var y_position = e.screenY;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milliseconds = date.getMilliseconds();
        var time = hours+": "+minutes+": "+seconds+": "+milliseconds;
        var user = sessionStorage.getItem("userName");
        var product_category = Categories;
        var product_name = Name;
        var product_id = Id;
        
        const mouseMoveRef = firebase.database().ref('NewProductMouseMove').child(user);
        const mouseMove = {
            product_id,
            product_category,
            product_name,
            time,
            x_position,
            y_position
        };
        mouseMoveRef.push(mouseMove);
    };

    return (
     
    <div className="col-md-auto"  onMouseOver = {mouseOverHandle}>
        <div className="card">
            <img className="card-img-top" src={Image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{Name}</h5>
                <p className="card-text">Price: TK {Price}</p>
                <button className="btn addToCart" onClick= {handleCart}>Add To Cart</button>
                <Link to ={`/product-details/${Id}`}><button className="btn">View Details</button></Link>
             </div>
        </div>
    </div>

    );
};

export default HomeCategories;