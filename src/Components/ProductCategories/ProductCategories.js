import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../../util/firebase';
import HomeCategories from '../HomeCategories/HomeCategories';
import './ProductCategories.css';
import fakeData from '../../fakeData';
const ProductCategories = () => {
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
    const mouseScrollRef = firebase.database().ref('NewProductCategoriesMouseScroll').child(user);
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
  console.log(user);
  const mouseMoveRef = firebase.database().ref('NewProductCategoriesMouseMove').child(user);
  const mouseMove = {
      time,
      x_position,
      y_position
  };
  mouseMoveRef.push(mouseMove);
});

  const {productCategories} = useParams();
  const[products, setProducts] = useState(fakeData);
  const product = products.filter(pd => pd.Categories == productCategories);
  //console.log(product);
 
    return (
        <div className="container">
            <div homeCategories="women" className = "text">{productCategories}</div>
              <div className="row">
              {
                  product.map(pd => <HomeCategories key={pd.Id} product={pd}></HomeCategories>)
                }
              </div>
            </div>
    );
};

export default ProductCategories;