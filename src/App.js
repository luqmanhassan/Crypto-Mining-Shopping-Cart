import React from 'react';
import './index.css';
import {useHistory} from 'react-router-dom';
import Cart from './cart.js';
import Nav from './nav.js';

const App = () => {
  let history = useHistory();

  return (
    <div className="App">
      <Cart />
      <Nav />
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
