import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import firebase from '../../util/firebase';
import fakeData from '../../fakeData';
import './ProductDetails.css';
const ProductDetails = () => {
  if(localStorage.getItem("firebase:host:cse-498-r.firebaseio.com"))
    {
        localStorage.removeItem("firebase:host:cse-498-r.firebaseio.com");
    }
  window.addEventListener('scroll', function(e) {
    var date = new Date();
    var y_position = window.scrollY;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    var time = hours+": "+minutes+": "+seconds+": "+milliseconds;
    var user = sessionStorage.getItem("userName");
    const mouseScrollRef = firebase.database().ref('NewMouseScroll').child(user);
    const mouseScroll = {
        time,
        y_position
    };
    mouseScrollRef.push(mouseScroll);
});

window.addEventListener('mousemove', function(e) {
  var date = new Date();
  var x_position = e.x;
  var y_position = e.y;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var milliseconds = date.getMilliseconds();
  var time = hours+": "+minutes+": "+seconds+": "+milliseconds;
  var user = sessionStorage.getItem("userName");
  const mouseMoveRef = firebase.database().ref('NewMouseMove').child(user);
  const mouseMove = {
      time,
      x_position,
      y_position
  };
  mouseMoveRef.push(mouseMove);
});
  const {productId} = useParams();
  const[products, setProducts] = useState(fakeData);
  const product = products.filter(pd => pd.Id == productId);
  //console.log(product);
  const {Id, Name, Categories, Price, Details, Image} = product[0];
  let value = sessionStorage.getItem("count");
  
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
    
    const productDetailsHandle = () => {
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
      
      const mouseClickRef = firebase.database().ref('NewProductMouseClick').child(user);
      const mouseClick = {
          product_id,
          product_category,
          product_name,
          time
      };
      mouseClickRef.push(mouseClick);
  };
  
  
    productDetailsHandle();

    return (
              <div className = "d-flex justify-content-center mt-2 product_details">
              <div className="row w-50 border-design">
                    <div className="col-md-4 w-25">
                            <img className="img-fluid w-100 card-img-top" src={Image} alt="Card image cap"/>
              </div>
 
              <div className="col w-75 d-flex align-content-center flex-wrap">
                <p>{Name} ( {Categories} )
                <br/>
                Price: $ {Price}
                <br/>
                {Details}</p>
                <br/>
                <button className="btn btn-primary addToCart" onClick= {handleCart}>Add To Cart</button>
            </div>
              </div>
              </div>
           
    );
};

export default ProductDetails;