import React from 'react';
import {useHistory} from 'react-router-dom';
import close from './images/close.png';
const Cart = () => {
  let history = useHistory();

  return (
    <div className="cart" id="cart">
      <img
        src={close}
        alt="close icon"
        onClick={() => {
          document.getElementById('cart').style.display = 'none';
        }}
      />
      <h1>Your Shopping Bag</h1>
      <p>Your bag is empty.</p>
      <button
        onClick={() => {
          history.push('/shop');
          document.getElementById('cart').style.display = 'none';
        }}
      >
        Browse Products
      </button>
    </div>
  );
};

export default Cart;
