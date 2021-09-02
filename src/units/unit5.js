import React from 'react';
import {useHistory} from 'react-router-dom';
import xdataport from '../images/xdataport.jpg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit5 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit5" id="Unit5">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={xdataport} alt="Iphone X Dataport" />
          <span>Iphone X Dataport </span>
        </div>
        <div className="info">
          <span>$100</span>
          <button
            onClick={() => {
              dispatch({type: 'unit5_add'});
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

export default Unit5;
