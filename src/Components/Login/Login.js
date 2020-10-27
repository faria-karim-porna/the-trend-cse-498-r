import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import firebase from '../../util/firebase';
const Login = () => {
    sessionStorage.setItem("count", 0);
    const [signUpUsernames, setSignUpUsernames] = useState();
    const [signUpPasswords, setSignUpPasswords] = useState();
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const usernameList = [];
    const passwordList = [];
    const[linkAddress,setLinkAddress] = useState("/login");
    useEffect(() => {
        const signUpRef = firebase.database().ref('NewSignUp');
        signUpRef.on('value', (snapshot) => {
            const users = snapshot.val();
            // const usernameList = [];
            // const passwordList = [];

            for(let id in users)
            {
                usernameList.push(users[id].username);
                passwordList.push(users[id].password);
            }
            //console.log(usersList);
            //console.log(usersList[2].username);
            setSignUpUsernames(usernameList);
            setSignUpPasswords(passwordList);
            //console.log(signUpUsers);
        })
    },[]);
     console.log(signUpUsernames);
    // console.log(passwordList);

    const handleBlur = (e) => {
        if(e.target.name == 'username'){
           setLoginUsername(e.target.value);
        }
        if(e.target.name == 'password'){
            setLoginPassword(e.target.value);
         }
      };
    

      const handleSubmit = (e) => {

        for(let id in signUpUsernames)
        {
            if(signUpUsernames[id] == loginUsername && signUpPasswords[id]== loginPassword)
            {
                console.log(true);
                sessionStorage.setItem("userName", loginUsername);
                sessionStorage.setItem("password", loginPassword);
                var actionName = "/home";
                setLinkAddress(actionName);
            }
            else{
                console.log(false);
                var actionName = "/login";
                setLinkAddress(actionName);
            }
        }
        e.preventDefault();
        localStorage.clear();
      }
    return (
        <div className="signup-form">
    <form>
		<p className="hint-text">Log In</p>
		
         <div className="form-group">
        	<input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" onBlur = {handleBlur}/>
        </div>
		<div className="form-group">
            <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" onBlur = {handleBlur}/>
        </div>
        <div className="form-group">
            <button className="btn btn-lg btn-block signup-btn" onClick = {handleSubmit}><Link to ={linkAddress} className = "buttonClass">Log-in</Link></button>
        </div>
        <p className = "alert">* Double Click On The Button</p>
         <div className="text-center">Don't have any account? <Link to = "/signUp">Sign Up</Link></div>
    </form>
</div>
    );
};

export default Login;