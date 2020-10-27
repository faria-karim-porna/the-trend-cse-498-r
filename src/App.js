import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import ProductCategories from './Components/ProductCategories/ProductCategories';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import ReviewCart from './Components/ReviewCart/ReviewCart';
function App() {
  return (
     <Router>
        {/* <Header></Header> */}
        <Switch>
          <Route path="/home">
             <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="/logIn">
            <Login></Login>
          </Route>
          <Route path="/product-categories/:productCategories">
          <Header></Header>
            <ProductCategories></ProductCategories>
          </Route>
          <Route path="/product-details/:productId">
          <Header></Header>
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/reviewCart">
          <Header></Header>
            <ReviewCart></ReviewCart>
          </Route>
          {/* <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute> */}
          {/* <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute> */}
          <Route exact path="/">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;
