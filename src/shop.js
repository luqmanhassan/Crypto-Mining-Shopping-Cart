import React from 'react';
import {useHistory} from 'react-router-dom';
import Cart from './cart.js';
function Shop() {
  let history = useHistory();
  return (
    <div className="shop">
      <Cart />
      <nav>
        <div
          class="logo logo_shop"
          onClick={() => {
            history.push('/home');
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
        <aside>
          <h1>Products</h1>
          <span>Screens</span>
          <span>Batteries</span>
          <span>Data Ports</span>
          <span>Cameras</span>
          <span>Repair Kits</span>
        </aside>
        <section>
          <div className="product">
            <img src="images/iphone11.png" alt="Iphone 11" />
            <span>Iphone 11 Screen</span>
            <span>$150</span>
          </div>
          <div className="product">
            <img src="./images/iphone11pro.jpeg" alt="Iphone 11 pro" />
            <span>Iphone 11 Pro Screen</span>
            <span>$200</span>
          </div>
          <div className="product">
            <img src="/images/iphone11promax.jpeg" alt="Iphone 11 Pro Max" />
            <span>Iphone 11 Pro Max Screen</span>
            <span>$250</span>
          </div>

          <div className="product">
            <img src="images/iphonexsmax.jpeg" alt="Iphone XS Max" />
            <span>Iphone XS Max Screen</span>
            <span>$200</span>
          </div>
          <div className="product">
            <img src="./images/iphonexs.jpeg" alt="Iphone xs" />
            <span>Iphone Xs Screen</span>
            <span>$180</span>
          </div>
          <div className="product">
            <img src="/images/iphonexr.jpeg" alt="Iphone XR" />
            <span>Iphone XR Screen</span>
            <span>$140</span>
          </div>
          <div className="product">
            <img src="/images/iphonex.jpeg" alt="Iphone X" />
            <span>Iphone X Screen</span>
            <span>$140</span>
          </div>

          <div className="product">
            <img src="images/iphone12.jpeg" alt="Iphone 12" />
            <span>Iphone 12 Screen</span>
            <span>$200</span>
          </div>
          <div className="product">
            <img src="./images/iphone12pro.jpeg" alt="Iphone 12 pro" />
            <span>Iphone 12 Pro Screen</span>
            <span>$180</span>
          </div>
          <div className="product">
            <img src="/images/iphone12promax.jpeg" alt="Iphone 12 Pro Max" />
            <span>Iphone 12 Pro max Screen</span>
            <span>$140</span>
          </div>
          <div className="product">
            <img src="/images/iphone12mini.jpeg" alt="Iphone 12 Mini" />
            <span>Iphone 12 Mini Screen</span>
            <span>$140</span>
          </div>
          <div className="product">
            <img src="/images/iphonese.jpeg" alt="Iphone SE" />
            <span>Iphone SE Screen</span>
            <span>$140</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Shop;
