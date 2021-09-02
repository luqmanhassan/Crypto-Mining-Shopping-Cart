import React from 'react';
import {useHistory} from 'react-router-dom';
import xcamera from '../images/xcamera.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit7 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit7" id="Unit7">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={xcamera} alt="Iphone X Camera" />
          <span>Iphone X Camera </span>
        </div>
        <div className="info">
          <span>$130</span>
          <button
            onClick={() => {
              dispatch({type: 'unit7_add'});
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

export default Unit7;
