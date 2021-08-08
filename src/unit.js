import React from 'react';
import {useHistory} from 'react-router-dom';
import Cart from './cart.js';

const Unit = (props) => {
  let history = useHistory();
  let image = '' + props.image;
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
        </div>
      </nav>
      <main>
        <div className="product">
          <img src={props.image} alt={image} />
          <span>{image}</span>
          <span>{props.price}</span>
        </div>
        <div className="product">
          <span>{props.price}</span>
          <button>Add To Cart</button>
          <button>Go Back</button>
        </div>
      </main>
    </div>
  );
};

export default Unit;
