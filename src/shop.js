import React from 'react';
import {Link} from 'react-router-dom';
// , {useState}

function Shop() {
  return (
    <div>
      <nav>
        <div>
          <span>
            <Link to="/shop" style={{textDecoration: 'none', color: 'white'}}>
              Shop
            </Link>
          </span>
          <span>
            <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}>
              Cart
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Shop;
