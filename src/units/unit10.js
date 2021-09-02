import React from 'react';
import {useHistory} from 'react-router-dom';
import kit2 from '../images/kit2.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
const Unit10 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="Unit Unit10" id="Unit10">
      <Cart />
      <Nav />
      <main>
        <div className="thing">
          <img src={kit2} alt="kit2" />
          <span>kit2 </span>
        </div>
        <div className="info">
          <span>$50</span>
          <button
            onClick={() => {
              dispatch({type: 'unit10_add'});
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

export default Unit10;
