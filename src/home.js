import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <nav>
        <div id="logo">iFix</div>
        <div id="nav_right">
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
      <main>
        <h1>Servicing your Electronic Repair Needs</h1>
        <button>
          <Link to="/shop" style={{textDecoration: 'none', color: 'black'}}>
            Shop Now
          </Link>
        </button>
      </main>
    </div>
  );
};

export default Home;
