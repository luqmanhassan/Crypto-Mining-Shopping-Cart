import React from 'react';
import {useHistory} from 'react-router-dom';
import Cart from './cart.js';
import iphone11 from './images/iphone11.png';
const Unit = (props) => {
  let history = useHistory();
  function addtocart() {
    document.getElementById('cart').style.display = 'flex';
    document.getElementById('emptybag').style.display = 'none';
    document.getElementById('cart_stuff').style.display = 'flex';
    document.getElementById('checkout').style.display = 'block';
  }
  return (
    <div className="Unit" id="Unit">
      <Cart />
      <nav>
        <div
          class="logo logo_shop"
          onClick={() => {
            history.push('/');
          }}
        >
          iFix
        </div>
        <div id="nav_right">
          <span
            onClick={() => {
              history.push('/shop');
            }}
          >
            Shop
          </span>
          <span
            onClick={() => {
              document.getElementById('cart').style.display = 'flex';
            }}
          >
            Cart
          </span>
          <span id="cart_items">0</span>
        </div>
      </nav>
      <main>
        <div className="thing">
          <img src={iphone11} alt="Iphone 11 Screen" />
          <span>Iphone 11 Screen</span>
        </div>
        <div className="info">
          <span>200$</span>
          <button onClick={addtocart}>Add To Cart</button>
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

export default Unit;
