import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartProduct.css';
import fakeData from '../../fakeData';
const CartProduct = (props) => {
  const product = props.product;
  const[products, setProducts] = useState(fakeData);
  const productList = products.filter(pd => pd.Id == product);
  const {Name, Image, Price} = productList[0];
  //console.log(Name);
    return (

              <div className="row w-100 cartProducts">
                    <div className="col-md-3 col-sm-4">
                            <img className="img-fluid card-img-top" src={Image} alt="Card image cap"/>
              </div>
 
              <div className="col d-flex align-content-center flex-wrap">
                <p>{Name}
                <br/>
                Price: TK. {Price}</p>
            </div>
              </div>
    );
};

export default CartProduct;