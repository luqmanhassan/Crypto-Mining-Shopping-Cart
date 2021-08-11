import React from 'react';
import {useHistory} from 'react-router-dom';
import Unit from './unit.js';
import Cart from './cart.js';
import './index.css';
import iphone11 from './images/iphone11.png';
import iphone11pro from './images/iphone11pro.jpeg';
import kit1 from './images/kit1.jpeg';
import kit2 from './images/kit2.jpeg';
import xbattery from './images/xbattery.jpeg';
import xrbattery from './images/xrbattery.png';
import xdataport from './images/xdataport.jpg';
import xrdataport from './images/xrdataport.jpg';
import xrcamera from './images/xrcamera.jpeg';
import xcamera from './images/xcamera.jpeg';

function Shop() {
  let history = useHistory();
  return (
    <div className="shop">
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
          <span className="cart_items">0</span>
        </div>
      </nav>
      <main>
        <aside>
          <h1>Products</h1>
          <span
            onClick={() => {
              document.getElementById('Screens').style.display = 'flex';
              document.getElementById('Batteries').style.display = 'none';
              document.getElementById('DataPorts').style.display = 'none';
              document.getElementById('Cameras').style.display = 'none';
              document.getElementById('RepairKits').style.display = 'none';
            }}
          >
            Screens
          </span>
          <span
            onClick={() => {
              document.getElementById('Screens').style.display = 'none';
              document.getElementById('Batteries').style.display = 'flex';
              document.getElementById('DataPorts').style.display = 'none';
              document.getElementById('Cameras').style.display = 'none';
              document.getElementById('RepairKits').style.display = 'none';
            }}
          >
            Batteries
          </span>
          <span
            onClick={() => {
              document.getElementById('Screens').style.display = 'none';
              document.getElementById('Batteries').style.display = 'none';
              document.getElementById('DataPorts').style.display = 'flex';
              document.getElementById('Cameras').style.display = 'none';
              document.getElementById('RepairKits').style.display = 'none';
            }}
          >
            Data Ports
          </span>
          <span
            onClick={() => {
              document.getElementById('Screens').style.display = 'none';
              document.getElementById('Batteries').style.display = 'none';
              document.getElementById('DataPorts').style.display = 'none';
              document.getElementById('Cameras').style.display = 'flex';
              document.getElementById('RepairKits').style.display = 'none';
            }}
          >
            Cameras
          </span>
          <span
            onClick={() => {
              document.getElementById('Screens').style.display = 'none';
              document.getElementById('Batteries').style.display = 'none';
              document.getElementById('DataPorts').style.display = 'none';
              document.getElementById('Cameras').style.display = 'none';
              document.getElementById('RepairKits').style.display = 'flex';
            }}
          >
            Repair Kits
          </span>
        </aside>

        <Screens />
        <Batteries />
        <DataPorts />
        <Cameras />
        <RepairKits />
      </main>
    </div>
  );
}

const Screens = () => {
  return (
    <div className="Screens" id="Screens">
      <Product
        src={iphone11}
        alt="Iphone 11 Screen"
        price="150"
        category="Screens"
      />
      <Product src={iphone11pro} alt="Iphone 11 Pro Screen" price="200" />
      <Unit
        src={iphone11}
        alt="Iphone 11 Screen"
        price="150"
        className="Unit iphone11screen"
        id="iphone11screen"
      />
      <Unit
        src={iphone11pro}
        alt="Iphone 11 Pro Screen"
        price="200"
        className="Unit iphone11proscreen"
        id="iphone11proscreen"
      />
    </div>
  );
};

const Batteries = () => {
  return (
    <div className="Batteries" id="Batteries">
      <Product src={xbattery} alt="Iphone X Battery" price="150" />
      <Product src={xrbattery} alt="Iphone XR Battery" price="200" />
    </div>
  );
};

const DataPorts = () => {
  return (
    <div className="DataPorts" id="DataPorts">
      <Product src={xdataport} alt="Iphone X Data Port" price="150" />
      <Product src={xrdataport} alt="Iphone XR Data Port" price="200" />
    </div>
  );
};

const Cameras = () => {
  return (
    <div className="Cameras" id="Cameras">
      <Product src={xcamera} alt="Iphone X Camera" price="150" />
      <Product src={xrcamera} alt="Iphone XR Camera" price="200" />
    </div>
  );
};

const RepairKits = () => {
  return (
    <div className="RepairKits" id="RepairKits">
      <Product src={kit1} alt="Iphone X Repair Kit" price="150" />
      <Product src={kit2} alt="Iphone XR Repair Kit" price="200" />
    </div>
  );
};

const Product = (props) => {
  return (
    <div
      className="Product"
      id="Product"
      onClick={(ev) => {
        ev.target.style.display = 'none';
      }}
    >
      <img src={props.src} alt={props.alt} />
      <span>{props.alt}</span>
      <span>{props.price}</span>
    </div>
  );
};

export default Shop;
