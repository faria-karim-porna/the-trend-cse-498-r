import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../util/firebase';
import './SignUp.css';
const SignUp = () => {
  sessionStorage.setItem("count", 0);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
      });
    const [password, setPassword] = useState(0);
    const[linkAddress,setLinkAddress] = useState("");
    let isFieldValid = true;
    const handleBlur = (e) => {
        if(e.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
          const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber =  /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
          setPassword(e.target.value);
        }
        if(e.target.name == 'confirm_password')
        {
            isFieldValid = e.target.value == password;
            console.log(isFieldValid);
        }
        if(isFieldValid){
          const newUserInfo = {...user};
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
      }

      const handleSubmit = (e) => {
        if(isFieldValid && user.username && user.email && user.password){
            const signUpRef = firebase.database().ref('NewSignUp');
            signUpRef.push(user);
            sessionStorage.setItem("userName", user.username);
            sessionStorage.setItem("password", user.password);
            var actionName = "/home";
            setLinkAddress(actionName);
        }
        e.preventDefault();
        localStorage.clear();
      }

      const handleGuest = (e) => {
            var username = "guest";
            var password = "0";
            var confirm_password = "0";
            var email = "guest@guest.com";
            const user = {
              confirm_password,
              email,
              password,
              username
          };
            const signUpRef = firebase.database().ref('NewSignUp');
            signUpRef.push(user);
            sessionStorage.setItem("userName", user.username);
            sessionStorage.setItem("password", user.password);
            var actionName = "/home";
            setLinkAddress(actionName);
            e.preventDefault();
            localStorage.clear();
      }
      
    return (
        <div className="signup-form">
    <form>
		<p className="hint-text">Create an account</p>
		
         <div className="form-group">
        	<input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" onBlur = {handleBlur}/>
        </div>
		<div className="form-group">
        	<input type="email" className="form-control input-lg" name="email" placeholder="Email" required="required" onBlur = {handleBlur}/>
        </div>


		<div className="form-group">
            <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" onBlur = {handleBlur}/>
        </div>

         <div className="form-group">
            <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" onBlur = {handleBlur}/>
        </div>
        <p className = "alert">* Double Click On The Button</p>
        <div className="form-group">
            <button className="btn btn-lg btn-block signup-btn" onClick = {handleSubmit}><Link to ={linkAddress} className = "buttonClass">Sign Up</Link></button>
        </div>
         <div className="text-center">Already have an account? <Link to = "/logIn">Login</Link></div>
    </form>
    
    <div className="or-seperator"><b>or</b></div>
    <p className = "alert">* Double Click On The Button</p>
    <div className="social-btn text-center">
			<a href="#" className="btn btn-lg" onClick = {handleGuest}><Link to ={linkAddress}>Sign Up As Guest</Link></a>
	</div>
</div>
    );
};

export default SignUp;