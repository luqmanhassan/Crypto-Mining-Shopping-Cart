import React from 'react';
import {useHistory} from 'react-router-dom';
import close from './images/close.png';
import carticon from './images/carticon.png';
import {useSelector, useDispatch} from 'react-redux';
import Item from './item.js';
import iphone11 from './images/iphone11.png';

function Cart(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const _unit1 = useSelector((state) => state.unit1);
  /*
  const _unit2 = useSelector((state) => state.unit2);
  const _unit3 = useSelector((state) => state.unit3);
  const _unit4 = useSelector((state) => state.unit4);
  const _unit5 = useSelector((state) => state.unit5);
  const _unit6 = useSelector((state) => state.unit6);
  const _unit7 = useSelector((state) => state.unit7);
  const _unit8 = useSelector((state) => state.unit8);
  const _unit9 = useSelector((state) => state.unit9);
  const _unit10 = useSelector((state) => state.unit10);
*/
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
      {counter === 0 && (
        <div id="emptybag">
          <p>Your bag is empty.</p>
          <img src={carticon} alt="cart icon" className="carticon" />
        </div>
      )}

      {_unit1 > 0 && (
        <Item
          id="sdf"
          src={iphone11}
          price="150"
          alt="Iphone 11"
          type1="unit1_add"
          type2="unit1_minus"
          input={_unit1}
          change="unit1change"
        />
      )}

      {counter > 0 && (
        <div id="checkout">
          <p>Total: {props.total} </p>
          <button
            onClick={() => {
              history.push('/');
              document.getElementById('cart').style.display = 'none';
            }}
          >
            Checkout
          </button>
        </div>
      )}

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
}

export default Cart;
/*

- Store data as array of objects So its viewable everywhere 
- Stick Bar Shold increment with each added cart item 
- Build individual card items for each of your products. 
- If User decrements item It should be deleted 
- Delete Btn for cart items 
- COmbine Totals for all cart items 
*/
