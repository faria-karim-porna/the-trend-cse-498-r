import React, { useState } from 'react';
import './Home.css';
import firebase from '../../util/firebase';
import { Link, Redirect } from 'react-router-dom';
import Slider from '../Slider/Slider';
import HomeCategories from '../HomeCategories/HomeCategories';
import fakeData from '../../fakeData';

const Home = () => {
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
    const mouseScrollRef = firebase.database().ref('NewHomeMouseScroll').child(user);
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
  
  const mouseMoveRef = firebase.database().ref('NewHomeMouseMove').child(user);
  const mouseMove = {
      time,
      x_position,
      y_position
  };
  mouseMoveRef.push(mouseMove);
});

  const[products, setProducts] = useState(fakeData);

  var womenHomeCategories = products.slice(0,5);
  var menHomeCategories = products.slice(5,10);
    return (
        <div>
          <Slider></Slider>

            <div className="container">
            <div homeCategories="women" className = "text">Women's Fashion</div>
              <div className="row">
                {
                  womenHomeCategories.map(pd => <HomeCategories key={pd.Id} product={pd}></HomeCategories>)
                }
              </div>
            </div>

            <div className="container">
            <div homeCategories="men" className = "text">Men's Fashion</div>
              <div className="row">
              {
                  menHomeCategories.map(pd => <HomeCategories key={pd.Id} product={pd}></HomeCategories>)
                }
              </div>
            </div>
        </div>

    );
};

export default Home;