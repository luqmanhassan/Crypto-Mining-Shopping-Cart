import React from 'react';
import {useHistory} from 'react-router-dom';
import xrcamera from '../images/xrcamera.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit8 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit8" id="Unit8">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={xrcamera} alt="Iphone XR Camera" />
          <span>Iphone XR Camera </span>
        </div>
        <div className="info">
          <span>$130</span>
          <button
            onClick={() => {
              dispatch({type: 'unit8_add'});
              dispatch({type: 'counter_add'});
              document.getElementById('cart').style.display = 'flex';
            }}
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              history.push('/shop');
            }}
          >
            Go Back
          </button>
        </div>
      </main>
    </div>
  );
};

export default Unit8;
