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
import {Grid, Button, Typography, Backdrop, TextField} from '@mui/material';

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
  /* const grandOBJ = [
    [
      _unit1,
      '_unit1',
      {iphone11},
      '150',
      'Iphone 11',
      'unit1_add',
      'unit1_minus',
      'unit1change',
    ],
    [
      _unit2,
      '_unit2',
      {iphone11pro},
      '150',
      'Iphone 11 Pro',
      'unit2_add',
      'unit2_minus',
      'unit2change',
    ],
    [
      _unit3,
      '_unit3',
      {xbattery},
      '60',
      'Iphone X Battery',
      'unit3_add',
      'unit3_minus',
      'unit3change',
    ],
    [
      _unit4,
      '_unit4',
      {xrbattery},
      '60',
      'Iphone X Battery',
      'unit4_add',
      'unit4_minus',
      'unit4change',
    ],
  ];
*/
  return (
    <Backdrop
      id="cart"
      sx={{
        display: 'none',
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        overflow: 'auto',
      }}
      open
    >
      <Grid
        // container
        item
        direction="column"
        align="center"
        spacing={6}
        sx={{
          border: '5px solid black',
          backgroundColor: 'white',
          p: '30px',
          overflow: 'auto',
        }}
      >
        <Grid item align="start">
          <img
            src={close}
            alt="close icon"
            className="closeicon"
            width="50px"
            onClick={() => {
              document.getElementById('cart').style.display = 'none';
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h3" color="black">
            Your Shopping Bag
          </Typography>
        </Grid>

        {counter === 0 && (
          <Grid item id="emptybag">
            <Typography variant="h6" color="black">
              Your bag is empty.
            </Typography>
            <img
              src={carticon}
              alt="cart icon"
              width="100px"
              className="carticon"
            />
          </Grid>
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
            <TextField
              sx={{width: '100px'}}
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
            <TextField
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit2change', payload: ev.target.value});
              }}
              value={_unit2}
              sx={{width: '100px'}}
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
            <TextField
              sx={{width: '100px'}}
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
            <TextField
              sx={{width: '100px'}}
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
            <TextField
              sx={{width: '100px'}}
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
            <TextField
              sx={{width: '100px'}}
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
            <TextField
              sx={{width: '100px'}}
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
            <TextField
              sx={{width: '100px'}}
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
            <TextField
              sx={{width: '100px'}}
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
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit10change', payload: ev.target.value});
              }}
              value={_unit10}
            />
          </Item>
        )}

        {counter > 0 && (
          <Grid item id="checkout">
            <Typography variant="h6" color="black">
              Total:
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
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                history.push('/');
                document.getElementById('cart').style.display = 'none';
              }}
            >
              Checkout
            </Button>
          </Grid>
        )}

        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              history.push('/shop');
              document.getElementById('cart').style.display = 'none';
            }}
          >
            Browse Products
          </Button>
        </Grid>
      </Grid>
    </Backdrop>
  );
}

export default Cart;
