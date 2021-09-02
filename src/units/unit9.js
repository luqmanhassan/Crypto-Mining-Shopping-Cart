import React from 'react';
import {useHistory} from 'react-router-dom';
import kit1 from '../images/kit1.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit9 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit9" id="Unit9">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={kit1} alt="kit1" />
          <span>Kit1 </span>
        </div>
        <div className="info">
          <span>$50</span>
          <button
            onClick={() => {
              dispatch({type: 'unit9_add'});
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

export default Unit9;
