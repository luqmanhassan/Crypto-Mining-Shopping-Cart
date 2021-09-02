import React from 'react';
import {useHistory} from 'react-router-dom';
import xbattery from '../images/xbattery.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit3 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit3" id="Unit3">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={xbattery} alt="Iphone X Battery" />
          <span>Iphone X Battery</span>
        </div>
        <div className="info">
          <span>$60</span>
          <button
            onClick={() => {
              dispatch({type: 'unit3_add'});
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

export default Unit3;
