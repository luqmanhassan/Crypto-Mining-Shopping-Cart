import React from 'react';
import {useHistory} from 'react-router-dom';
import iphone11pro from '../images/iphone11pro.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit2 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit1" id="Unit1">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={iphone11pro} alt="Iphone 11 Pro Screen" />
          <span>Iphone 11 Pro Screen</span>
        </div>
        <div className="info">
          <span>$150</span>
          <button
            onClick={() => {
              dispatch({type: 'unit2_add'});
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

export default Unit2;
