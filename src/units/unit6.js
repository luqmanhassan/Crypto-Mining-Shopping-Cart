import React from 'react';
import {useHistory} from 'react-router-dom';
import xrdataport from '../images/xrdataport.jpg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit6 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit4" id="Unit4">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={xrdataport} alt="Iphone XR Dataport" />
          <span>Iphone XR Dataport </span>
        </div>
        <div className="info">
          <span>$100</span>
          <button
            onClick={() => {
              dispatch({type: 'unit6_add'});
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

export default Unit6;
