import React from 'react';
import {useHistory} from 'react-router-dom';
import xrbattery from '../images/xrbattery.png';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit4 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit4" id="Unit4">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={xrbattery} alt="Iphone XR Battery d" />
          <span>Iphone XR Battery </span>
        </div>
        <div className="info">
          <span>$60</span>
          <button
            onClick={() => {
              dispatch({type: 'unit4_add'});
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

export default Unit4;
