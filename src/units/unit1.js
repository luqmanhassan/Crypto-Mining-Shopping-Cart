import React from 'react';
import {useHistory} from 'react-router-dom';
import iphone11 from '../images/iphone11.png';
import Cart from '../cart.js';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';

const Unit1 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit1" id="Unit1">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={iphone11} alt="Iphone 11 Screen" />
          <span>Iphone 11 Screen</span>
        </div>
        <div className="info">
          <span>$150</span>
          <button
            onClick={() => {
              dispatch({type: 'unit1_add'});
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

export default Unit1;
