import React from 'react';
import {useHistory} from 'react-router-dom';
import close from './images/close.png';
import carticon from './images/carticon.png';
import {useSelector, useDispatch} from 'react-redux';
import Item from './item.js';
import iphone11 from './images/iphone11.png';
import iphone11pro from './images/iphone11pro.jpeg';
import xbattery from './images/xbattery.jpeg';
import xrbattery from './images/xrbattery.png';
import kit1 from './images/kit1.jpeg';
import kit2 from './images/kit2.jpeg';
import xdataport from './images/xdataport.jpg';
import xrdataport from './images/xrdataport.jpg';
import xrcamera from './images/xrcamera.jpeg';
import xcamera from './images/xcamera.jpeg';

function Cart(props) {
  let history = useHistory();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const _unit1 = useSelector((state) => state.unit1);
  const _unit2 = useSelector((state) => state.unit2);
  const _unit3 = useSelector((state) => state.unit3);
  const _unit4 = useSelector((state) => state.unit4);
  const _unit5 = useSelector((state) => state.unit5);
  const _unit6 = useSelector((state) => state.unit6);
  const _unit7 = useSelector((state) => state.unit7);
  const _unit8 = useSelector((state) => state.unit8);
  const _unit9 = useSelector((state) => state.unit9);
  const _unit10 = useSelector((state) => state.unit10);
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
          id="_unit1"
          src={iphone11}
          price="150"
          alt="Iphone 11"
          type1="unit1_add"
          type2="unit1_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit1change', payload: ev.target.value});
            }}
            value={_unit1}
          />
        </Item>
      )}
      {_unit2 > 0 && (
        <Item
          id="_unit2"
          src={iphone11pro}
          price="150"
          alt="Iphone 11 Pro"
          type1="unit2_add"
          type2="unit2_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit2change', payload: ev.target.value});
            }}
            value={_unit2}
          />
        </Item>
      )}
      {_unit3 > 0 && (
        <Item
          id="_unit3"
          src={xbattery}
          price="60"
          alt="Iphone X Battery"
          type1="unit3_add"
          type2="unit3_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit3change', payload: ev.target.value});
            }}
            value={_unit3}
          />
        </Item>
      )}
      {_unit4 > 0 && (
        <Item
          id="_unit4"
          src={xrbattery}
          price="150"
          alt="Iphone XR Battery"
          type1="unit4_add"
          type2="unit4_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit4change', payload: ev.target.value});
            }}
            value={_unit4}
          />
        </Item>
      )}
      {_unit5 > 0 && (
        <Item
          id="_unit5"
          src={xdataport}
          price="100"
          alt="Iphone X Dataport"
          type1="unit5_add"
          type2="unit5_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit5change', payload: ev.target.value});
            }}
            value={_unit5}
          />
        </Item>
      )}
      {_unit6 > 0 && (
        <Item
          id="_unit6"
          src={xrdataport}
          price="100"
          alt="Iphone XR Dataport"
          type1="unit6_add"
          type2="unit6_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit6change', payload: ev.target.value});
            }}
            value={_unit6}
          />
        </Item>
      )}
      {_unit7 > 0 && (
        <Item
          id="_unit7"
          src={xcamera}
          price="130"
          alt="Iphone X Camera"
          type1="unit7_add"
          type2="unit7_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit7change', payload: ev.target.value});
            }}
            value={_unit7}
          />
        </Item>
      )}
      {_unit8 > 0 && (
        <Item
          id="_unit8"
          src={xrcamera}
          price="130"
          alt="Iphone XR Camera"
          type1="unit8_add"
          type2="unit8_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit8change', payload: ev.target.value});
            }}
            value={_unit8}
          />
        </Item>
      )}
      {_unit9 > 0 && (
        <Item
          id="_kit1"
          src={kit1}
          price="50"
          alt="Kit 1"
          type1="unit9_add"
          type2="unit9_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit9change', payload: ev.target.value});
            }}
            value={_unit9}
          />
        </Item>
      )}
      {_unit10 > 0 && (
        <Item
          id="_kit2"
          src={kit2}
          price="50"
          alt="Kit 2"
          type1="unit10_add"
          type2="unit10_minus"
        >
          <input
            type="text"
            id="input_total"
            onChange={(ev) => {
              dispatch({type: 'unit10change', payload: ev.target.value});
            }}
            value={_unit10}
          />
        </Item>
      )}
      {counter > 0 && (
        <div id="checkout">
          <p>
            Total:{' '}
            {_unit1 * 150 +
              _unit2 * 150 +
              _unit3 * 60 +
              _unit4 * 60 +
              _unit5 * 100 +
              _unit6 * 100 +
              _unit7 * 130 +
              _unit8 * 130 +
              _unit9 * 50 +
              _unit10 * 50}
          </p>
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
