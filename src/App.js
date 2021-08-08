import React from 'react';
import './index.css';
import {useHistory} from 'react-router-dom';
import Cart from './cart.js';

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

const Home = () => {
  let history = useHistory();
  return (
    <div className="home">
      <Cart />
      <nav>
        <div
          className="logo"
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
        <h1>Servicing your Electronic Repair Needs</h1>
        <button
          onClick={() => {
            history.push('/shop');
          }}
        >
          Shop Now
        </button>
      </main>
    </div>
  );
};

export default App;
