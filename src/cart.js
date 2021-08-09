import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import close from './images/close.png';
import iphone11 from './images/iphone11.png';
import carticon from './images/carticon.png';

const Cart = () => {
  let history = useHistory();
  const [total, setTotal] = useState();
  return (
    <div className="cart" id="cart">
      <img
        src={close}
        alt="close icon"
        className="closeicon"
        onClick={() => {
          document.getElementById('cart').style.display = 'none';
        }}
      />
      <h1>Your Shopping Bag</h1>
      <div id="emptybag">
        <p>Your bag is empty.</p>
        <img src={carticon} alt="cart icon" className="carticon" />
      </div>

      <div id="cart_stuff">
        <img src={iphone11} alt="Iphone 11 Screen" />
        <div id="cart_stuff_inside">
          <p>Screens</p>
          <p>Iphone 11 Screen</p>
          <p>200$</p>
          <div>
            <span
              onClick={() => {
                let x = document.getElementById('input_total').value;
                if (x > 0) {
                  document.getElementById('input_total').value = Number(x) - 1;
                  setTotal((Number(x) - 1) * 200);
                }
              }}
            >
              -
            </span>
            <input
              type="text"
              onChange={(ev) => {
                setTotal(ev.target.value * 200);
              }}
              id="input_total"
            />
            <span
              onClick={() => {
                let x = document.getElementById('input_total').value;
                document.getElementById('input_total').value = Number(x) + 1;
                setTotal((Number(x) + 1) * 200);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div id="checkout">
        <p>Total: {total} </p>
        <button
          onClick={() => {
            history.push('/');
            document.getElementById('cart_stuff').style.display = 'none';
          }}
        >
          Checkout
        </button>
      </div>

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
