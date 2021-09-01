import React from 'react';
import {useHistory} from 'react-router-dom';
import iphone11pro from '../images/iphone11pro.jpeg';
import Nav from '../nav.js';

const Unit2 = (props) => {
  let history = useHistory();
  function addtocart() {
    document.getElementById('cart').style.display = 'flex';
    document.getElementById('emptybag').style.display = 'none';
    document.getElementById('cart_stuff').style.display = 'flex';
    document.getElementById('checkout').style.display = 'block';
    let x = document.getElementById('cart_items').innerHTML;
    document.getElementsByClassName('cart_items').innerHTML = Number(x) + 1;
  }
  return (
    <div className="Unit Unit1" id="Unit1">
      <Nav />
      <main>
        <div className="thing">
          <img src={iphone11pro} alt="Iphone 11 Pro Screen" />
          <span>Iphone 11 Pro Screen</span>
        </div>
        <div className="info">
          <span>$180</span>
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

export default Unit2;
