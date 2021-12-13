import React from 'react';
import {useNavigate} from 'react-router-dom';
import Cart from './cart.js';
import './styles/index.css';
import btc1 from './images/btc1.jpg';
import btc2 from './images/btc2.jpeg';
import eth1 from './images/eth1.jpeg';
import eth2 from './images/eth2.jpeg';
import mon1 from './images/mon1.jpeg';
import mon2 from './images/mon2.jpg';
import lit1 from './images/lit1.jpeg';
import lit2 from './images/lit2.jpg';
import rav1 from './images/rav1.jpeg';
import rav2 from './images/rav2.jpg';
import Nav from './nav.js';
import {Grid, Button, Typography} from '@mui/material';
const selections = ['Bitcoin', 'Ethereum', 'Monacoin', 'Litecoin', 'Ravencoin'];
function toggle(select) {
  for (let i = 0; i < selections.length; i++) {
    if (selections[i] === select) {
      document.getElementById(selections[i]).style.display = 'flex';
    } else {
      document.getElementById(selections[i]).style.display = 'none';
    }
  }
}
function Shop() {
  return (
    <Grid container className="shop">
      <Cart />
      <Nav />
      <Grid
        item
        container
        sx={{
          display: 'flex',
          flexFlow: [
            'column nowrap',
            'column nowrap',
            'column nowrap',
            'row nowrap',
            'row nowrap',
          ],
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            p: '50px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" pb="50px" textAlign="center">
            Products
          </Typography>
          <Button
            onClick={() => {
              toggle('Bitcoin');
            }}
            sx={{color: 'black'}}
          >
            Bitcoin
          </Button>
          <Button
            onClick={() => {
              toggle('Ethereum');
            }}
            sx={{color: 'black'}}
          >
            Ethereum
          </Button>
          <Button
            onClick={() => {
              toggle('Monacoin');
            }}
            sx={{color: 'black'}}
          >
            Monacoin
          </Button>
          <Button
            onClick={() => {
              toggle('Litecoin');
            }}
            sx={{color: 'black'}}
          >
            Litecoin
          </Button>
          <Button
            onClick={() => {
              toggle('Ravencoin');
            }}
            sx={{color: 'black'}}
          >
            Ravencoin
          </Button>
        </Grid>

        <Bitcoin />
        <Ethereum />
        <Monacoin />
        <Litecoin />
        <Ravencoin />
      </Grid>
    </Grid>
  );
}

const Bitcoin = () => {
  return (
    <Grid
      item
      className="Bitcoin"
      id="Bitcoin"
      sx={{
        display: 'flex',
        flexFlow: [
          'column nowrap',
          'column nowrap',
          'row nowrap',
          'row nowrap',
          'row nowrap',
        ],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Product
        src={btc1}
        alt="BTC Rig 1"
        price="2000"
        unit="Unit1"
        category="Bitcoin"
      />
      <Product src={btc2} alt="BTC RIg 2" unit="Unit2" price="2500" />
    </Grid>
  );
};

const Ethereum = () => {
  return (
    <Grid
      item
      container
      className="Ethereum"
      id="Ethereum"
      sx={{
        display: 'none',
        flexFlow: [
          'column nowrap',
          'column nowrap',
          'row nowrap',
          'row nowrap',
          'row nowrap',
        ],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Product src={eth1} alt="Eth Rig 1" unit="Unit3" price="3000" />
      <Product src={eth2} alt="Eth Rig 2" unit="Unit4" price="3500" />
    </Grid>
  );
};

const Monacoin = () => {
  return (
    <Grid
      item
      container
      className="Monacoin"
      id="Monacoin"
      sx={{
        display: 'none',
        flexFlow: [
          'column nowrap',
          'column nowrap',
          'row nowrap',
          'row nowrap',
          'row nowrap',
        ],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Product src={mon1} alt="Mon Rig 1" unit="Unit5" price="4000" />
      <Product src={mon2} alt="Mon Rig 2" unit="Unit6" price="4500" />
    </Grid>
  );
};

const Litecoin = () => {
  return (
    <Grid
      item
      container
      className="Litecoin"
      id="Litecoin"
      sx={{
        display: 'none',
        flexFlow: [
          'column nowrap',
          'column nowrap',
          'row nowrap',
          'row nowrap',
          'row nowrap',
        ],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Product src={lit1} alt="Lit Rig 1" unit="Unit7" price="5000" />
      <Product src={lit2} alt="Lit Rig 2" unit="Unit8" price="5500" />
    </Grid>
  );
};

const Ravencoin = () => {
  return (
    <Grid
      item
      container
      className="Ravencoin"
      id="Ravencoin"
      sx={{
        display: 'none',
        flexFlow: [
          'column nowrap',
          'column nowrap',
          'row nowrap',
          'row nowrap',
          'row nowrap',
        ],
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Product src={rav1} alt="Rav Rig 1" unit="Unit9" price="6000" />
      <Product src={rav2} alt="Rav Rig 2" unit="Unit10" price="6500" />
    </Grid>
  );
};

const Product = (props) => {
  let navigate = useNavigate();
  return (
    <Grid
      item
      className="Product"
      id="Product"
      onClick={() => {
        navigate(`/` + props.unit);
      }}
      direction="center"
      align="center"
      p="10px"
      sx={{
        p: '50px',
      }}
    >
      <img src={props.src} alt={props.alt} width="300px" />
      <Typography variant="h6">{props.alt}</Typography>
      <Typography variant="body1">{props.price}</Typography>
    </Grid>
  );
};

export default Shop;
